import time
from unittest import mock
from unittest.mock import patch

import pytest
from fastapi.testclient import TestClient

from photobooth.application import app
from photobooth.services.config import appconfig


@pytest.fixture
def client() -> TestClient:
    with TestClient(app=app, base_url="http://test") as client:
        # create one image to ensure there is at least one
        services = client.app.container.services()
        services.processing_service().start_job_1pic()

        yield client
        client.app.container.shutdown_resources()


def test_printing_disabled(client: TestClient):
    # default printing is disabled, try to print gives a 405

    response = client.get("/print/latest")

    assert response.status_code == 405


@patch("subprocess.run")
def test_print_latest(mock_run: mock.Mock, client: TestClient):
    # enable printing
    appconfig.hardwareinputoutput.printing_enabled = True

    response = client.get("/print/latest")

    assert response.status_code == 200
    mock_run.assert_called()


@patch("subprocess.run")
def test_print_specific_id(mock_run: mock.Mock, client: TestClient):
    appconfig.hardwareinputoutput.printing_enabled = True

    # get an image to print
    mediaitem = client.app.container.services().mediacollection_service().db_get_most_recent_mediaitem()

    response = client.get(f"/print/item/{mediaitem.id}")

    assert response.status_code == 200
    mock_run.assert_called()


@patch("subprocess.run")
def test_print_exception(mock_run: mock.Mock, client: TestClient):
    mock_run.side_effect = Exception("mock error")

    appconfig.hardwareinputoutput.printing_enabled = True

    response = client.get("/print/latest")

    assert response.status_code == 500
    mock_run.assert_called()


@patch("subprocess.run")
def test_print_check_blocking(mock_run: mock.Mock, client: TestClient):
    # get config
    appconfig.hardwareinputoutput.printing_enabled = True
    appconfig.hardwareinputoutput.printing_blocked_time = 2

    response = client.get("/print/latest")

    time.sleep(appconfig.hardwareinputoutput.printing_blocked_time / 2)

    response = client.get("/print/latest")  # should be blocked and error

    assert response.status_code == 425
    mock_run.assert_called()

    # wait a little more until printing is fine again
    time.sleep((appconfig.hardwareinputoutput.printing_blocked_time / 2) + 0.2)

    response = client.get("/print/latest")  # should give no error again

    assert response.status_code == 200
    mock_run.assert_called()
