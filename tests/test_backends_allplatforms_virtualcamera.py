"""
Testing VIRTUALCAMERA Backend
"""
import logging
from unittest import mock
from unittest.mock import patch

import pytest

from photobooth.services.backends.virtualcamera import VirtualCameraBackend
from photobooth.services.config import appconfig

from .backends_utils import get_images

logger = logging.getLogger(name=None)


@pytest.fixture(autouse=True)
def run_around_tests():
    appconfig.reset_defaults()

    yield


@pytest.fixture()
def backend_virtual() -> VirtualCameraBackend:
    # setup
    backend = VirtualCameraBackend()

    # deliver
    backend.start()
    backend.block_until_device_is_running()
    yield backend
    backend.stop()


def test_get_images_virtualcamera(backend_virtual: VirtualCameraBackend):
    """get lores and hires images from backend and assert"""
    get_images(backend_virtual)


def test_get_images_virtualcamera_force_processexit_ensure_recovery(backend_virtual: VirtualCameraBackend):
    """get lores and hires images from backend and assert"""
    get_images(backend_virtual)

    # force process to exit, which equals a device failing.
    logger.info("killing virtualcamera process to simulate failing device")
    backend_virtual._virtualcamera_process.terminate()

    logger.info("trying to get images again, fails if not restarted by supervisor")
    with pytest.raises(RuntimeError):
        # lores stream is used to detect if a backend failed.
        backend_virtual.wait_for_lores_image(2)

    get_images(backend_virtual)


def test_get_images_virtualcamera_force_hqstillfail_ensure_recovery(backend_virtual: VirtualCameraBackend):
    """get lores and hires images from backend and assert"""
    get_images(backend_virtual)

    error_mock = mock.MagicMock()
    error_mock.side_effect = TimeoutError("mock timeouterror during hq capture")

    with patch.object(VirtualCameraBackend, "_wait_for_hq_image", error_mock):
        with pytest.raises(RuntimeError):
            backend_virtual.wait_for_hq_image()

    logger.info("trying to get images again after provoked fail and backend restart.")
    get_images(backend_virtual)
