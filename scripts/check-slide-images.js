const fs = require("fs");
const path = require("path");
const yaml = require("js-yaml");
const chalk = require("chalk");
const logSymbols = require("log-symbols");

const yamlFilePath = path.join(process.cwd(), "src/artwork-slides/slides.yaml");

const IMAGES_DIR = path.join(process.cwd(), "src/artwork-images");

function checkFilesExist(slides) {
  let missingFiles = false;

  for (const slide of slides) {
    if (slide.slideMedia) {
      const fileName = slide.slideMedia.fileName;
      const filePath = path.join(IMAGES_DIR, fileName);

      if (!fs.existsSync(filePath)) {
        console.error(
          chalk.red(`${logSymbols.error} Image file not found: ${filePath}`)
        );
        missingFiles = true;
      }
    }
  }

  if (missingFiles) {
    console.error(
      chalk.red(
        `${logSymbols.error} At least one slide image file not found. Exiting...`
      )
    );
    process.exit(1); // Exit with an error code if missing files are found
  } else {
    console.log(
      chalk.green(
        `${logSymbols.success} [Verified] All images specified in slides.yaml exist.`
      )
    ); // Optional: Indicate all files are present
  }
}

// Read the YAML file
try {
  const yamlContent = fs.readFileSync(yamlFilePath, "utf8");
  const slides = yaml.load(yamlContent);
  checkFilesExist(slides);
} catch (error) {
  console.error(
    chalk.red(
      `${logSymbols.error} Error reading or parsing the YAML file: ${error}`
    )
  );
  process.exit(1); // Exit with an error code if there's an error reading or parsing the YAML file
}
