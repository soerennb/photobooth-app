import typing

from pydantic import Field
from pydantic_settings import SettingsConfigDict

from photobooth import CONFIG_PATH
from photobooth.services.config.baseconfig import BaseConfig

available_filter = typing.Literal[
    "anime",
    "astronaut",
    "caricature",
    "clay",
    "comic",
    "gotcha",
    "impasto",
    "kids",
    "marble",
    "medieval",
    "neotokyo",
    "pencil",
    "retro",
    "scifi",
    "vaporwave",
    "watercolor"
]
available_services = typing.Literal["stability_ai", "sdwebui-forge"]

class FilterStablediffusionConfig(BaseConfig):
    model_config = SettingsConfigDict(title="Stablediffusion Filter Plugin Config", json_file=f"{CONFIG_PATH}plugin_filter_stablediffusion.json")

    add_userselectable_filter: bool = Field(
        default=True,
        description="Add userselectable filter to the list the user can choose from.",
    )
    userselectable_filter: list[available_filter] = Field(
        default=[f for f in typing.get_args(available_filter)],
        description="Select filter, the user can choose from. Even if unselected here, the filter is still available in the admin configuration.",
    )
    userselectable_services: list[available_services] = Field(
        default=[f for f in typing.get_args(available_services)],
        description="Select the service to use for manipulating the original image.",
    )
    api_key: str = Field(
        default="",
        description = "Your Stability.ai API Key"
    )
    sdwebui_hostname: str = Field(
        default="192.168.56.1",
        description = "The Hostname or IP of your SD-WebUI-Forge API server"
    )
