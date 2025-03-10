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
from .webuiapi import *
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
        
        from .stability_ai import StabilityAIFilter
        stability_ai = StabilityAIFilter( filter )
        image = stability_ai( params, image )
        return image
        
        # create API client with custom host, port
        # TODO: create configuration parameters
        #api = webuiapi.WebUIApi(host="127.0.0.1", port=7860)
        api = WebUIApi(host="192.168.56.1", port=7860)
        options = {}
        options['sd_model_checkpoint'] = params["model"]
        params["prompt"] += ", energetic atmosphere capturing thrill of the moment, clear details, best quality, extremely detailed cg 8k wallpaper, volumetric lighting, 4k, best quality, masterpiece, ultrahigh res, group photo, sharp focus, (perfect image composition)"

        api.set_options(options)
        params.pop('model', None)

        controlnets = []
        openpose = ControlNetUnit(
            module=params["openpose"]["module"],
            model=params["openpose"]["model"],
            weight=params["openpose"]["weight"],
            threshold_a = 0.5,
            threshold_b = 0.5,
            resize_mode="Crop and Resize"
        )
        #openpose.input_mode = "simple"
        #openpose.save_detected_map=True
        #openpose.use_preview_as_input= False,
        params.pop('openpose', None)
        controlnets.append(openpose)

        depth = ControlNetUnit(
            module=params["depth"]["module"], 
            model=params["depth"]["model"], 
            weight=params["depth"]["weight"],
            threshold_a = 0.5,
            threshold_b = 0.5,
            resize_mode="Crop and Resize"
        )
        controlnets.append(depth)
        params.pop('depth', None)

        softedge = ControlNetUnit(
            module=params["softedge"]["module"],
            model=params["softedge"]["model"],
            weight=params["softedge"]["weight"],
            threshold_a = 0.5,
            threshold_b = 0.5,
            resize_mode="Crop and Resize"
        )
        controlnets.append(softedge)

        params.pop('softedge', None)

        params["controlnet_units"] = controlnets
        params["images"] = [image]
        params["negative_prompt"] = params["negative_prompt"]
        params["seed"] = params["seed"]
        params["batch_size"] = params["batch_size"]
        params["steps"] =  params["steps"]
        params["height"] = params["height"]
        params["width"] = params["width"]
        params["sampler_index"] = ""
        params["denoising_strength"] = float(params["denoising_strength"])
        params["cfg_scale"] = float(params["cfg_scale"])
        result = api.img2img(**params)
        #for x in params["images"]:
        #    print( b64_img(x))
        #print( repr(params) )
        filtered_image = result.image

        return filtered_image


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