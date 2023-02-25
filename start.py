#!/usr/bin/python3
import subprocess
from src.InformationService import InformationService
from starlette.exceptions import HTTPException as StarletteHTTPException
from fastapi.exception_handlers import (
    http_exception_handler,
    request_validation_exception_handler,
)
from fastapi.exceptions import RequestValidationError
import os
import platform
import psutil
import threading
import uvicorn
import asyncio
import uuid
import logging
from src.ImageServers import ImageServers
from src.ConfigSettings import ConfigSettings, settings
from src.KeyboardService import KeyboardService
from src.CamStateMachine import TakePictureMachineModel, states, transitions
from src.WledService import WledService
from src.ImageDb import ImageDb
from src.LoggingService import LoggingService
from transitions import Machine
# from gpiozero import CPUTemperature, LoadAverage
from pymitter import EventEmitter
from sse_starlette import EventSourceResponse, ServerSentEvent
from fastapi.responses import StreamingResponse, FileResponse
from starlette.staticfiles import StaticFiles
from fastapi import FastAPI, Request, HTTPException, status, Body
from queue import Queue

# create early instances
# event system
ee: EventEmitter = EventEmitter()
ls: LoggingService = LoggingService(ee=ee)

# constants
SERVICE_NAME = "imageserver"


logger = logging.getLogger(__name__)


app = FastAPI()

"""
request_stop = False


def signal_handler(sig, frame):
    global request_stop

    request_stop = True

    logger.info("request_stop set True to stop ongoing processes")
    # TODO! this seems not to work properly yet, function is not called!

    # sys.exit(0)


# signal CTRL-C and systemctl stop
signal.signal(signal.SIGINT, signal_handler)
# this is not working, because uvicorn is eating up signal handler definitions currently: https://github.com/encode/uvicorn/issues/1579
# as workaround currently we set force_exit to True to shutdown the server
"""


@app.get("/eventstream")
def subscribe(request: Request):
    # principle with queues like described here:
    # https://maxhalford.github.io/blog/flask-sse-no-deps/
    # and https://github.com/sysid/sse-starlette
    # and https://github.com/encode/starlette/issues/20#issuecomment-587410233
    # ... this code example seems to be cleaner https://github.com/sysid/sse-starlette/blob/master/examples/custom_generator.py

    # local message queue
    queue = Queue()  # TODO: limit max queue size in case client doesnt catch up so fast?

    def add_subscriptions():
        logger.debug(f"add subscription for publishSSE")
        ee.on("publishSSE", addToQueue)

    def remove_subscriptions():
        logger.debug(f"remove subscriptions for publishSSE")
        ee.off("publishSSE", addToQueue)

    def addToQueue(sse_event, sse_data):
        queue.put_nowait(ServerSentEvent(
            id=uuid.uuid4(), event=sse_event, data=sse_data, retry=10000))

    async def event_iterator():
        try:
            while True:
                if await request.is_disconnected():
                    logger.info(f"request.is_disconnected() true")
                    break
                # if request_stop:
                #    logger.info(f"event_iterator stop requested")
                #    break

                # throttle the iterator a little down using asyncio to not block the webserver thread but lower cpu usage.
                await asyncio.sleep(0.01)
                try:
                    # try to get a event/message off the queue
                    event = queue.get_nowait()
                except:
                    continue

                # send data to client
                yield event

        except asyncio.CancelledError as e:
            logger.info(
                f"Disconnected from client (via refresh/close) {request.client}")
            # Do any other cleanup, if any
            remove_subscriptions()

            raise e

    logger.info(f"Client connected {request.client}")
    add_subscriptions()

    # initial messages on client connect
    addToQueue(sse_event="message",
               sse_data=f"Client connected {request.client}")
    addToQueue(sse_event="config/currentconfig",
               sse_data=settings.json())

    # all modules can register this event to send initial messages on connection
    ee.emit("publishSSE/initial")

    return EventSourceResponse(event_iterator(), ping=1)


"""
@app.get("/debug/health")
def api_debug_health():
    la = LoadAverage(
        minutes=1, max_load_average=psutil.cpu_count(), threshold=psutil.cpu_count()*0.8)
    cpu_temperature = round(CPUTemperature().temperature, 1)
    return ({"cpu_current_load": la.value, "cpu_above_threshold": la.is_active, "cpu_temperature": cpu_temperature})
"""


@app.get("/debug/threads")
def api_debug_threads():

    list = [item.getName() for item in threading.enumerate()]
    logger.debug(f"active threads: {list}")
    return (list)


@app.get("/config/schema")
def api_get_config_schema(type: str = "default"):
    return (settings.getSchema(type=type))


@app.get("/config/currentActive")
def api_get_config_current():
    # returns currently cached and active settings
    return (settings.dict())


@app.get("/config/current")
def api_get_config_current():
    # read settings from drive and return
    return (ConfigSettings().dict())


@app.post("/config/current")
def api_post_config_current(updatedSettings: ConfigSettings):
    updatedSettings.persist()  # save settings to disc
    # restart service to load new config

    # will return 0 for active else inactive.
    result = subprocess.run(
        ['systemctl', '--user', 'is-active', '--quiet', SERVICE_NAME])
    logger.info(result)

    if (result.returncode == 0):
        logger.info(f"service {SERVICE_NAME} currently active, restarting")
        os.system(f"systemctl --user restart {SERVICE_NAME}")
    else:
        logger.warning(
            f"service {SERVICE_NAME} currently inactive, need to restart by yourself!")


@app.get("/cmd/frameserver/capturemode", status_code=status.HTTP_204_NO_CONTENT)
# photobooth compatibility
def api_cmd_framserver_capturemode_get():
    ee.emit("httprequest/armed")
    ee.emit("onCaptureMode")


@app.get("/cmd/frameserver/previewmode", status_code=status.HTTP_204_NO_CONTENT)
# photobooth compatibility
def api_cmd_frameserver_previewmode_get():
    ee.emit("onPreviewMode")


@app.post("/cmd/capture", status_code=status.HTTP_200_OK)
# photobooth compatibility
def api_cmd_capture_post(filepath: str = Body("capture.jpg")):
    imageDb.captureHqImage(filepath, True)
    return "Done"


@app.get("/cmd/{action}/{param}")
def api_cmd(action, param):
    logger.info(f"cmd api requested action={action}, param={param}")

    if (action == "config" and param == "reset"):
        settings.deleteconfig()
    elif (action == "config" and param == "restore"):
        os.system("reboot")
    elif (action == "server" and param == "reboot"):
        os.system("reboot")
    elif (action == "server" and param == "shutdown"):
        os.system("shutdown now")
    elif (action == "service" and param == "restart"):
        os.system("systemctl --user restart imageserver")
    elif (action == "service" and param == "stop"):
        os.system("systemctl --user stop imageserver")
    elif (action == "service" and param == "start"):
        os.system("systemctl --user start imageserver")

    else:
        raise HTTPException(
            500, f"invalid request action={action}, param={param}")

    return f"action={action}, param={param}"


"""
CAM STATE MACHINE CONTROLS triggered by client ui
"""


@app.get("/cmd/capture")
@app.get("/chose/1pic")
def api_chose_1pic_get():
    try:
        model.invokeProcess("arm")
        return "OK"
    except Exception as e:
        logger.exception(e)
        raise HTTPException(
            status_code=500, detail=f"something went wrong, Exception: {e}")


@ee.on("keyboardservice/chose_1pic")
def evt_chose_1pic_get():
    try:
        model.invokeProcess("arm")
    except Exception as e:
        logger.exception(e)


@app.get("/stats/focuser")
def api_stats_focuser():
    pass
    # return (focusState._lastRunResult)


@app.get("/gallery/images")
def api_gallery_images():
    try:
        return imageDb.dbGetImages()
    except Exception as e:
        logger.exception(e)
        raise HTTPException(
            status_code=500, detail=f"something went wrong, Exception: {e}")


@app.get("/gallery/delete", status_code=status.HTTP_204_NO_CONTENT)
def api_gallery_delete(id: str):
    logger.info(f"gallery_delete requested, id={id}")
    try:
        imageDb.deleteImageById(id)
    except Exception as e:
        logger.exception(e)
        raise HTTPException(500, f"deleting failed: {e}")


@app.get('/stream.mjpg')
def video_stream():
    if not settings.backends.LIVEPREVIEW_ENABLED:
        raise HTTPException(405, f"preview not enabled")

    try:
        return StreamingResponse(imageServers.gen_stream(),
                                 media_type='multipart/x-mixed-replace; boundary=frame')
    except Exception as e:
        logger.exception(e)
        raise HTTPException(500, f"preview failed: {e}")


# serve data directory holding images, thumbnails, ...
app.mount('/data', StaticFiles(directory='data'), name="data")


@app.get("/")
def read_index():
    return FileResponse('web/index.html')


# if not match anything above, default to deliver static files from web directory
app.mount("/", StaticFiles(directory="web"), name="web")


@app.exception_handler(StarletteHTTPException)
async def custom_http_exception_handler(request, exc):
    logger.error(f"http StarletteHTTPException: {repr(exc)}")
    return await http_exception_handler(request, exc)


@app.exception_handler(RequestValidationError)
async def validation_exception_handler(request, exc):
    logger.error(f"http RequestValidationError: {exc}")
    return await request_validation_exception_handler(request, exc)

if __name__ == '__main__':
    logger.info('Welcome to qPhotobooth')
    logger.info(f"platform.system={platform.system()}")
    logger.info(f"platform.release={platform.release()}")
    logger.info(f"platform.machine={platform.machine()}")
    logger.info(f"platform.python_version={platform.python_version()}")
    logger.info(f"hostname={platform.node()}")
    logger.info(f"psutil.cpu_count logical={psutil.cpu_count()}")
    logger.info(f"psutil.cpu_count cores={psutil.cpu_count(logical=False)}")
    logger.info(f"psutil.disk_partitions={psutil.disk_partitions()}")
    if platform.system() == "Linux":
        logger.info(f"psutil.disk_usage /={psutil.disk_usage('/')}")
    elif platform.system() == "Windows":
        logger.info(f"psutil.disk_usage C:={psutil.disk_usage('C:')}")
    logger.info(f"psutil.net_if_addrs={psutil.net_if_addrs()}")
    logger.info(f"psutil.virtual_memory={psutil.virtual_memory()}")
    # run python with -O (optimized) sets debug to false and disables asserts from bytecode
    logger.info(f"__debug__={__debug__}")

    wledservice = WledService(ee)

    # load imageserver dynamically because service can be configured https://stackoverflow.com/a/14053838
    imageServers = ImageServers(ee)

    imageDb = ImageDb(ee, imageServers.primaryBackend)

    ks = KeyboardService(ee)

    # model, machine and fire.
    model = TakePictureMachineModel(ee)
    machine = Machine(model, states=states,
                      transitions=transitions, after_state_change='sse_emit_statechange', initial='idle')
    model.start()
    imageServers.start()

    # log all registered listener
    logger.debug(ee.listeners_all())

    ins = InformationService(ee)

    # serve files forever
    try:
        # log_level="trace", default info
        config = uvicorn.Config(app=app, host="0.0.0.0",
                                port=settings.common.webserver_port, log_level="info", workers=5)
        server = uvicorn.Server(config)

        # workaround until https://github.com/encode/uvicorn/issues/1579 is fixed and shutdown can be handled properly.
        # Otherwise the stream.mjpg if open will block shutdown of the server
        server.force_exit = True

        server.run()
    finally:

        imageServers.stop()
        ins.stop()
