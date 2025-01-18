"""
AppConfig class providing central config for ui

These settings are 1:1 sent to the vue frontend.
Remember to keep the settings in sync! Fields added here need to be added to the frontend also.

"""

from typing import Literal

from pydantic import BaseModel, ConfigDict, Field
from pydantic_extra_types.color import Color

from ..models.models import PilgramFilter


class GroupUiSettings(BaseModel):
    """Personalize the booth's UI."""

    model_config = ConfigDict(title="Personalize the User Interface")

    theme: Literal["system", "light", "dark"] = Field(
        default="system",
        description="Specify the theme for the app.",
    )

    PRIMARY_COLOR: Color = Field(
        default=Color("#196cb0").as_hex(),
        description="Primary color (e.g. buttons, title bar).",
    )

    SECONDARY_COLOR: Color = Field(
        default=Color("#b8124f").as_hex(),
        description="Secondary color (admin interface, accents).",
    )

    theme: Literal["system", "light", "dark"] = Field(
        default="system",
        description="Specify the theme for the app. Set to system for automatic switching based on system/browser settings or force the light/dark theme.",
    )

    show_gallery_on_frontpage: bool = Field(
        default=True,
        description="Show button to gallery on frontpage.",
    )
    show_admin_on_frontpage: bool = Field(
        default=True,
        description="Show button to admin center, usually only during setup.",
    )
    admin_button_invisible: bool = Field(
        default=False,
        description="If button is shown, it can still be rendered invisible. If enabled, the button is 100% transparent and 5 clicks each within 500ms are required to access the admin login.",
    )

    enable_automatic_slideshow: bool = Field(
        default=True,
        description="Enable a random slideshow after some time without any user interaction.",
    )
    show_automatic_slideshow_timeout: int = Field(
        default=300,
        ge=30,
        description="Timeout in seconds after which the slideshow starts.",
    )

    enable_livestream_when_idle: bool = Field(
        default=True,
        description="When idle, the cameras livestream is displayed permanently.",
    )
    enable_livestream_when_active: bool = Field(
        default=True,
        description="When countdown or capture is active, the cameras livestream is displayed.",
    )
    livestream_mirror_effect: bool = Field(
        default=True,
        description="Flip livestream horizontally to create a mirror effect feeling more natural to users.",
    )
    FRONTPAGE_TEXT: str = Field(
        default='<div class="fixed-center text-h2 text-weight-bold text-center text-white" style="text-shadow: 4px 4px 4px #666;">Hey!<br>Let\'s take some pictures! <br>📷💕</div>',
        description="Text/HTML displayed on frontpage.",
    )

    TAKEPIC_MSG_TIME: float = Field(
        default=0.5,
        description="Offset in seconds, the smile-icon shall be shown.",
    )
    TAKEPIC_MSG_TEXT: str = Field(
        default="😃",
        description="Message to display at the end of the capture countdown.",
    )

    AUTOCLOSE_NEW_ITEM_ARRIVED: int = Field(
        default=30,
        description="Timeout in seconds a new item popup closes automatically.",
    )

    GALLERY_EMPTY_MSG: str = Field(
        default='<div class="fixed-center text-h2 text-weight-bold text-center text-white" style="text-shadow: 4px 4px 4px #666;">Empty, Zero, Nada! 🤷‍♂️<br>Let\'s take some pictures! <br>📷💕</div>',
        description="Message displayed if gallery is empty.",
    )
    gallery_show_qrcode: bool = Field(
        default=True,
        description="Show QR code in gallery. If shareservice is enabled the URL is automatically generated, if not go to share config and provide URL.",
    )
    qrcode_text_above: str = Field(
        default="👋 Download your photo!",
        description="Display text above the QR code.",
    )
    qrcode_text_below: str = Field(
        default="Scan above code with your phone.",
        description="Display text below the QR code.",
    )
    gallery_show_filter: bool = Field(
        default=True,
        description="Show instagramlike filter (pilgram2).",
    )
    gallery_filter_userselectable: list[PilgramFilter] = Field(
        default=[e for e in PilgramFilter],
    )
    gallery_show_download: bool = Field(
        default=True,
        description="Show a download button in gallery.",
    )
    gallery_show_delete: bool = Field(
        default=True,
        description="Show a delete button in gallery.",
    )
    gallery_show_shareprint: bool = Field(
        default=True,
        description="Show the share/print buttons in gallery.",
    )
