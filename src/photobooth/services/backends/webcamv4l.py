"""
v4l webcam implementation backend
"""

import logging
from pathlib import Path
from tempfile import NamedTemporaryFile
from threading import Condition

from ...utils.stoppablethread import StoppableThread
from ..config.groups.backends import GroupBackendV4l2
from .abstractbackend import AbstractBackend, GeneralBytesResult

try:
    import linuxpy.video.device as linuxpy_video_device  # type: ignore
except ImportError:
    linuxpy_video_device = None


logger = logging.getLogger(__name__)


class WebcamV4lBackend(AbstractBackend):
    def __init__(self, config: GroupBackendV4l2):
        self._config: GroupBackendV4l2 = config
        super().__init__(orientation=config.orientation)

        if linuxpy_video_device is None:
            raise ModuleNotFoundError("Backend is not available - either wrong platform or not installed!")

        self._lores_data: GeneralBytesResult = GeneralBytesResult(data=b"", condition=Condition())
        self._worker_thread: StoppableThread | None = None

    def start(self):
        super().start()

        self._worker_thread = StoppableThread(name="webcamv4l_worker_thread", target=self._worker_fun, daemon=True)
        self._worker_thread.start()

        logger.debug(f"{self.__module__} started")

    def stop(self):
        super().stop()

        if self._worker_thread and self._worker_thread.is_alive():
            self._worker_thread.stop()
            self._worker_thread.join()

        logger.debug(f"{self.__module__} stopped")

    def _device_alive(self) -> bool:
        super_alive = super()._device_alive()
        worker_alive = bool(self._worker_thread and self._worker_thread.is_alive())

        return super_alive and worker_alive

    def _device_available(self):
        if self._config.device_index in available_camera_indexes():
            return True
        else:
            return False

    def _wait_for_multicam_files(self) -> list[Path]:
        raise NotImplementedError("backend does not support multicam files")

    def _wait_for_still_file(self) -> Path:
        """for other threads to receive a hq JPEG image"""
        with NamedTemporaryFile(mode="wb", delete=False, dir="tmp", prefix="webcamv4l2_", suffix=".jpg") as f:
            f.write(self._wait_for_lores_image())
            return Path(f.name)

    def _wait_for_lores_image(self) -> bytes:
        """for other threads to receive a lores JPEG image"""

        with self._lores_data.condition:
            if not self._lores_data.condition.wait(timeout=0.5):
                raise TimeoutError("timeout receiving frames")

            return self._lores_data.data

    def _on_configure_optimized_for_idle(self):
        pass

    def _on_configure_optimized_for_hq_preview(self):
        pass

    def _on_configure_optimized_for_hq_capture(self):
        pass

    def _worker_fun(self):
        logger.info("_worker_fun starts")
        logger.info(f"trying to open camera index={self._config.device_index=}")

        assert linuxpy_video_device
        assert self._worker_thread

        with linuxpy_video_device.Device.from_id(self._config.device_index) as device:
            logger.info(f"webcam devices index {self._config.device_index} opened")
            logger.info(f"webcam info: {device.info.card}")

            try:
                capture = linuxpy_video_device.VideoCapture(device)
                capture.set_fps(25)
                capture.set_format(self._config.CAM_RESOLUTION_WIDTH, self._config.CAM_RESOLUTION_HEIGHT, "MJPG")
                fmt = capture.get_format()
                fps = capture.get_fps()
                device.log.info(f"Starting capture {fmt.width}x{fmt.height} at {fps} fps in {fmt.pixel_format.name}")
            except (AttributeError, FileNotFoundError) as exc:
                logger.error(f"cannot open camera {self._config.device_index} properly.")
                logger.exception(exc)
                raise exc

            for frame in device:  # forever
                # do it here, because opening device for for loop iteration takes also some time that is abstracted by the lib
                if not self.is_ready_to_deliver.is_set():
                    # set only once.
                    self._device_set_is_ready_to_deliver()

                with self._lores_data.condition:
                    self._lores_data.data = bytes(frame)
                    self._lores_data.condition.notify_all()

                self._frame_tick()

                # abort streaming on shutdown so process can join and close
                if self._worker_thread.stopped():
                    break

        self._device_set_is_ready_to_deliver(False)
        logger.info("v4l_img_aquisition finished, exit")


def available_camera_indexes() -> list[int]:
    if linuxpy_video_device is None:
        raise ModuleNotFoundError("Backend is not available - either wrong platform or not installed!")

    mjpeg_stream_devices: list[int] = []

    devices_list = list(linuxpy_video_device.iter_video_capture_devices())

    for device_list in devices_list:
        with linuxpy_video_device.Device(device_list.filename) as device:
            if any(device_format.pixel_format == linuxpy_video_device.PixelFormat.MJPEG for device_format in device.info.formats):
                if device.index is not None:
                    mjpeg_stream_devices.append(device.index)

    return mjpeg_stream_devices
