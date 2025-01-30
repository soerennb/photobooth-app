import photobooth.filters.sdpresets.basefiltersd as basefiltersd


class ClayFilterSD(basefiltersd):
    def __init__(self) -> None:
        self.name = "clay"
        self.icon = "clay.png"
        self.label = "Clay Figure"
        self.model = "dreamshaper8Pruned.hz5Q.safetensors"
        self.Controlnet["depth"]["weight"] = 0.7
        self.Controlnet["openpose"]["weight"] = 0.8
        self.Controlnet["softegde"]["weight"] = 0.4
        self.prompt = "clazy style, claymation, stopmotion, small clay figure, vibrant colors, fantastic plastic <lora:ClayAnimationRedmond15-ClayAnimation-Clay:0.7>"
        self.enabled = 1

    def getParams(self):
        return {
            "name": self.name,
            "icon": self.icon,
            "label": self.label,
            "model": self.model,
            "depth": self.depth,
            "openpose": self.openpose,
            "softegde": self.softegde,
            "prompt": self.prompt,
            "enabled": self.enabled,
        }
