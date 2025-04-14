import base64
import io
import json
from io import BytesIO
from pydoc import locate
from re import sub
import logging
from PIL import Image

from ..webuiapi import *
from ..filterpresets_sd import *
logger = logging.getLogger(__name__)
from .baserunner import BaseRunner


class SDWebUIFilter(BaseRunner):
    def __init__(self, api_key: str):
        super().__init__(api_key=api_key)

    def run(self, params, image: Image.Image) -> Image.Image:
        try:
        
            # create API client with custom host, port
            if( params["sdwebui_hostname"] == "" ):
                params["sdwebui_hostname"] = "127.0.0.1"
            api = WebUIApi(host=params["sdwebui_hostname"], port=7860)
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
        
        except Exception as exc:
            logger.debug( "Error  processing the request from SD WEbUI Forge: " + repr ( response))
            raise RuntimeError(f"error processing the filter {params["name"]}") from exc