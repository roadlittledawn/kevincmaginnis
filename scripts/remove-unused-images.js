const path = require("path");
const fs = require("fs");
const yaml = require("js-yaml");

const SLIDE_YAML_FILEPATH = path.join(
  process.cwd(),
  "src/artwork-slides/slides.yaml"
);
const IMAGES_DIR = path.join(process.cwd(), "src/artwork-images");

const main = () => {
  try {
    const yamlData = yaml.load(fs.readFileSync(SLIDE_YAML_FILEPATH, "utf8"));

    fs.readdirSync(IMAGES_DIR).forEach((imageFileName) => {
      const isUsedInSlides = Boolean(
        yamlData.find(
          ({ slideMedia }) =>
            slideMedia.type === "image" && slideMedia.fileName === imageFileName
        )
      );
      if (!isUsedInSlides) {
        fs.rm(path.join(IMAGES_DIR, imageFileName), () =>
          console.log("Removed unused image: ", imageFileName)
        );
      }
    });
  } catch (error) {
    console.error(error);
  }
};

main();
