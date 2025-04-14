from abc import ABC, abstractmethod

from PIL import Image



class BaseRunner(ABC):
    def __init__(self, api_key: str = ""):
        # TODO
        print(api_key)
        self.api_key: str = api_key

    @abstractmethod
    def run(self, params, image: Image.Image) -> Image.Image:
        pass
