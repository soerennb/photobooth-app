import logging
from typing import cast, get_args
import os.path
from enum import Enum
from re import sub
from PIL import Image, ImageFilter
from pydoc import locate
from photobooth.plugins import hookimpl
from photobooth.plugins.base_plugin import BaseFilter
from .filterpresets_sd import *
from . import config
from .config import FilterStablediffusionConfig, available_filter

logger = logging.getLogger(__name__)


class FilterStablediffusion(BaseFilter[config.FilterStablediffusionConfig]):
    def __init__(self):
        super().__init__()

        self._config: config.FilterStablediffusionConfig = config.FilterStablediffusionConfig()

    @hookimpl
    def mp_avail_filter(self) -> list[str]:
        return [self.unify(f) for f in get_args(available_filter)]

    @hookimpl
    def mp_userselectable_filter(self) -> list[str]:
        if self._config.add_userselectable_filter:
            return [self.unify(f) for f in self._config.userselectable_filter]
        else:
            return []


    @hookimpl
    def mp_filter_pipeline_step(self, image: Image.Image, plugin_filter: str, preview: bool) -> Image.Image | None:
        filter = self.deunify(plugin_filter)
        if( preview ):
            dirname = os.path.dirname(__file__) or '.'
            previewImage = Image.open(dirname + "/filterpreviews/" + str(filter) + ".png")
            return previewImage
        else:
            return self.do_filter(image, cast(available_filter, filter))

    def do_filter(self, image: Image.Image, filter: available_filter) -> Image.Image:
        
        baseparams = {
            key: value
            for key, value in BaseFilterSD.__dict__.items()
            if not key.startswith("__") and not callable(value) and not callable(getattr(value, "__get__", None))
        }
        filterclass = to_camelcase( filter )
        # e.g. for style "anime" import AnimeFilterSD
        #mod = locate('.filterpresets_sd.' + filterclass +"FilterSD")
        logger.debug("Loading Filter module %s", '.filterpresets_sd.' + filterclass +"FilterSD" )
        mod = globals()[filterclass +"FilterSD"]
        sdfilter = mod()
        filterparams = sdfilter.getParams()
        # Combine the Base Paramters and the special filter parameters
        
        params = merge_nested_dicts(baseparams, filterparams )
        if( self._config.userselectable_services == "stability_ai" ):
            from .runner.stability_ai import StabilityAIFilter
            stability_ai = StabilityAIFilter( filter )
            image = stability_ai.run( params, image )
        
        if( self._config.userselectable_services == "sdwebui-forge" ):
            params["sdwebui_hostname"] = self._config.sdwebui_hostname
            from .runner.sdwebui_forge import SDWebUIFilter
            sdwebui_forge = SDWebUIFilter( filter )
            image = sdwebui_forge.run( params, image )

        return image
        
        


def to_camelcase(s):
  s = sub(r"(_|-)+", " ", s).title().replace(" ", "").replace("*","")
  return ''.join([s[0].upper(), s[1:]])

def merge_nested_dicts(dict1, dict2):
    res = {}
    for key, value in dict1.items():
        if key in dict2:
            res[key] = merge_nested_dicts(dict1[key], dict2[key])
            del dict2[key]
        else:
            res[key]=value
    res.update(dict2)
    return res