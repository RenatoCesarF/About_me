from pathlib import Path
from PIL import Image
import os

def convert_to_webp(source):
    destination = source.with_suffix(".webp")

    image = Image.open(source)  # Open image
    image.save(destination, format="webp")  # Convert image to webp
    os.remove(source) #remove png

    return destination


def main():
    pathsPngs = Path("src/assets").glob("**/*.png" )
    pathsJpgs = Path("src/assets").glob("**/*.jpg")

    print("Started...")
    for path in pathsJpgs:
        print(path)
        webp_path = convert_to_webp(path)
    for path in pathsPngs:
        print(path)
        webp_path = convert_to_webp(path)
    print("Finished")



main()