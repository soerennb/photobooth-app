from StoppableThread import StoppableThread
from pymitter import EventEmitter
from threading import Condition
from ConfigSettings import settings
from libcamera import Transform
from turbojpeg import TurboJPEG, TJPF_RGB, TJSAMP_422
import json
from picamera2 import Picamera2, MappedArray
import psutil
import threading
from threading import Condition
from src.ImageServerPicam2AddonCustomAutofocus import ImageServerPicam2AddonCustomAutofocus
from src.ImageServerPicam2AddonLibcamAutofocus import ImageServerPicam2AddonLibcamAutofocus
import cv2
import time
import logging
import ImageServerAbstract
logger = logging.getLogger(__name__)


class ImageServerPicam2(ImageServerAbstract.ImageServerAbstract):
    def __init__(self, ee, enableStream):
        super().__init__(ee, enableStream)
        # public props (defined in abstract class also)
        self.exif_make = "Photobooth Picamera2 Integration"
        self.exif_model = "Custom"
        self.metadata = {}

        # private props
        """A simple class that can serve up frames from one of the Picamera2's configured
        streams to multiple other threads.
        Pass in the Picamera2 object and the name of the stream for which you want
        to serve up frames."""
        self._picam2 = Picamera2()
        self._turboJPEG = TurboJPEG()
        self._ee = ee
        if (settings.focuser.ENABLED):
            # custom autofocus (has ROI, ... might be removed in future if libcam support for autofocus is well)
            self._addonAutofocus = ImageServerPicam2AddonCustomAutofocus(
                self, ee)
        else:
            self._addonAutofocus = ImageServerPicam2AddonLibcamAutofocus(
                self, ee)

        self._hq_array = None
        self._lores_array = None
        self._hq_condition = Condition()
        self._lores_condition = Condition()
        self._trigger_hq_capture = False
        self._currentmode = None
        self._count = 0

        # worker threads
        self._generateImagesThread = StoppableThread(name="_generateImagesThread",
                                                     target=self._GenerateImagesFun, daemon=True)
        self._statsThread = StoppableThread(name="_statsThread",
                                            target=self._StatsFun, daemon=True)

        # config HQ mode (used for picture capture and live preview on countdown)
        self._captureConfig = self._picam2.create_still_configuration(
            {"size": (settings.common.CAPTURE_CAM_RESOLUTION_WIDTH, settings.common.CAPTURE_CAM_RESOLUTION_HEIGHT)}, {"size": (settings.common.LIVEVIEW_RESOLUTION_WIDTH, settings.common.LIVEVIEW_RESOLUTION_HEIGHT)}, encode="lores", buffer_count=2, display="lores", transform=Transform(hflip=settings.common.CAMERA_TRANSFORM_HFLIP, vflip=settings.common.CAMERA_TRANSFORM_VFLIP))

        # config preview mode (used for permanent live view)
        self._previewConfig = self._picam2.create_video_configuration(
            {"size": (settings.common.PREVIEW_CAM_RESOLUTION_WIDTH, settings.common.PREVIEW_CAM_RESOLUTION_HEIGHT)}, {"size": (settings.common.LIVEVIEW_RESOLUTION_WIDTH, settings.common.LIVEVIEW_RESOLUTION_HEIGHT)}, encode="lores", buffer_count=2, display="lores", transform=Transform(hflip=settings.common.CAMERA_TRANSFORM_HFLIP, vflip=settings.common.CAMERA_TRANSFORM_VFLIP))

        # activate preview mode on init
        self._onPreviewMode()
        self._picam2.configure(self._currentmode)

        logger.info(f"camera_config: {self._picam2.camera_config}")
        logger.info(f"camera_controls: {self._picam2.camera_controls}")
        logger.info(f"controls: {self._picam2.controls}")

        # apply pre_callback overlay. whether there is actual content is decided in the callback itself.
        self._picam2.pre_callback = self._pre_callback_overlay

        self.setAeExposureMode(
            settings.backends.picam2_AE_EXPOSURE_MODE)

    def start(self):
        """To start the FrameServer, you will also need to start the Picamera2 object."""
        # start camera
        self._picam2.start()

        self._generateImagesThread.start()
        self._statsThread.start()

        logger.debug(f"{self.__module__} started")

    def stop(self):
        """To stop the FrameServer, first stop any client threads (that might be
        blocked in wait_for_frame), then call this stop method. Don't stop the
        Picamera2 object until the FrameServer has been stopped."""
        self._addonAutofocus.abortOngoingFocusThread()

        self._generateImagesThread.stop()
        self._statsThread.stop()

        self._generateImagesThread.join(1)
        self._statsThread.join(1)

        self._picam2.stop()

        logger.debug(f"{self.__module__} stopped")

    def wait_for_hq_image(self):
        """for other threads to receive a hq JPEG image"""
        with self._hq_condition:
            while True:
                # TODO: timout to make it continue and do not block threads completely
                if not self._hq_condition.wait(1):
                    raise IOError("timeout receiving frames")
                buffer = self._getJpegByHiresFrame(
                    frame=self._hq_array, quality=settings.common.HIRES_STILL_QUALITY)
                return buffer

    def gen_stream(self):
        lastTime = time.time_ns()

        while not self._generateImagesThread.stopped():
            array = self._wait_for_lores_frame()

            nowTime = time.time_ns()
            if ((nowTime-lastTime)/1000**3 >= (1/settings.common.LIVEPREVIEW_FRAMERATE)):
                lastTime = nowTime
                buffer = self._getJpegByLoresFrame(
                    frame=array, quality=settings.common.LIVEPREVIEW_QUALITY)
                yield (b'--frame\r\n'
                       b'Content-Type: image/jpeg\r\n\r\n' + buffer + b'\r\n\r\n')

    def trigger_hq_capture(self):
        self._trigger_hq_capture = True

    """
    INTERNAL FUNCTIONS
    """

    def _wait_for_lores_image(self):
        """for other threads to receive a lores JPEG image"""
        with self._lores_condition:
            while True:
                # TODO: timout to make it continue and do not block threads completely
                if not self._lores_condition.wait(2):
                    raise IOError("timeout receiving frames")
                buffer = self._getJpegByLoresFrame(
                    frame=self._lores_array, quality=settings.common.LIVEPREVIEW_QUALITY)
                return buffer

    def _wait_for_lores_frame(self):
        """for other threads to receive a lores frame"""
        with self._lores_condition:
            while True:
                # TODO: timout to make it continue and do not block threads completely
                if not self._lores_condition.wait(2):
                    raise IOError("timeout receiving frames")
                return self._lores_array

    def _onCaptureMode(self):
        logger.debug(
            "change to capture mode")
        self._lastmode = self._currentmode
        self._currentmode = self._captureConfig

    def _onPreviewMode(self):
        logger.debug(
            "change to preview mode")
        self._lastmode = self._currentmode
        self._currentmode = self._previewConfig

    def _getJpegByHiresFrame(self, frame, quality):
        jpeg_buffer = self._turboJPEG.encode(
            frame, quality=quality, pixel_format=TJPF_RGB, jpeg_subsample=TJSAMP_422)

        return jpeg_buffer

    def _getJpegByLoresFrame(self, frame, quality):
        jpeg_buffer = self._turboJPEG.encode(
            frame, quality=quality)

        return jpeg_buffer

    def setAeExposureMode(self, newmode):
        logger.info(f"setAeExposureMode, try to set to {newmode}")
        try:
            self._picam2.set_controls(
                {"AeExposureMode": newmode})
        except:
            logger.error(
                f"setAeExposureMode failed! Mode {newmode} not available")

        logger.info(
            f"current picam2.controls.get_libcamera_controls(): {self._picam2.controls.get_libcamera_controls()}")

    def _pre_callback_overlay(self, request):
        if settings.debugging.picam2_stats_overlay:
            try:
                overlay1 = f""
                overlay2 = f"{self.fps} fps"
                overlay3 = f"Exposure: {round(self.metadata['ExposureTime']/1000,1)}ms, 1/{int(1/(self.metadata['ExposureTime']/1000/1000))}s, resulting max fps: {round(1/self.metadata['ExposureTime']*1000*1000,1)}"
                overlay4 = f"Lux: {round(self.metadata['Lux'],1)}"
                overlay5 = f"Ae locked: {self.metadata['AeLocked']}, analogue gain {round(self.metadata['AnalogueGain'],1)}"
                overlay6 = f"Colour Temp: {self.metadata['ColourTemperature']}"
                overlay7 = f""
                colour = (210, 210, 210)
                origin1 = (30, 200)
                origin2 = (30, 230)
                origin3 = (30, 260)
                origin4 = (30, 290)
                origin5 = (30, 320)
                origin6 = (30, 350)
                origin7 = (30, 380)
                font = cv2.FONT_HERSHEY_SIMPLEX
                scale = 1
                thickness = 2

                with MappedArray(request, "lores") as m:
                    cv2.putText(m.array, overlay1, origin1,
                                font, scale, colour, thickness)
                    cv2.putText(m.array, overlay2, origin2,
                                font, scale, colour, thickness)
                    cv2.putText(m.array, overlay3, origin3,
                                font, scale, colour, thickness)
                    cv2.putText(m.array, overlay4, origin4,
                                font, scale, colour, thickness)
                    cv2.putText(m.array, overlay5, origin5,
                                font, scale, colour, thickness)
                    cv2.putText(m.array, overlay6, origin6,
                                font, scale, colour, thickness)
                    cv2.putText(m.array, overlay7, origin7,
                                font, scale, colour, thickness)
            except:
                # fail silent if metadata still None (TODO: change None to Metadata contructor on init in Frameserver)
                pass

    """
    INTERNAL IMAGE GENERATOR
    """

    def _StatsFun(self):
        CALC_EVERY = 2  # update every x seconds only

        # FPS = 1 / time to process loop
        start_time = time.time()  # start time of the loop

        # to calc frames per second every second
        while not self._statsThread.stopped():
            if (time.time() > (start_time+CALC_EVERY)):
                fps = round(float(self._count) /
                            (time.time() - start_time), 1)

                # reset
                self._count = 0
                start_time = time.time()

            # thread wait otherwise 100% load ;)
            time.sleep(0.1)

    def _GenerateImagesFun(self):

        while not self._generateImagesThread.stopped():  # repeat until stopped
            if self._trigger_hq_capture == True and self._currentmode != self._captureConfig:
                # ensure cam is in capture quality mode even if there was no countdown triggered beforehand
                # usually there is a countdown, but this is to be safe
                logger.warning(
                    f"force switchmode to capture config right before taking picture (no countdown?!)")
                self._onCaptureMode()

            if (not self._currentmode == self._lastmode) and self._lastmode != None:
                logger.info(f"switch_mode invoked")
                self._picam2.switch_mode(self._currentmode)
                self._lastmode = self._currentmode

            if not self._trigger_hq_capture:
                (orig_array,), self.metadata = self._picam2.capture_arrays(
                    ["lores"])

                # convert colors to rgb because lores-stream is always YUV420 that is not used in application usually.
                array = cv2.cvtColor(orig_array, cv2.COLOR_YUV420p2RGB)

                with self._lores_condition:
                    self._lores_array = array
                    self._lores_condition.notify_all()
            else:
                # only capture one pic and return to lores streaming afterwards
                self._trigger_hq_capture = False

                self._ee.emit("frameserver/onCapture")

                # capture hq picture
                (array,), self.metadata = self._picam2.capture_arrays(
                    ["main"])
                logger.info(self.metadata)

                self._ee.emit("frameserver/onCaptureFinished")

                with self._hq_condition:
                    self._hq_array = array
                    self._hq_condition.notify_all()

                # switch back to preview mode
                self._onPreviewMode()

            self._count += 1
