const fs = require("fs");
const path = require("path");
const slugify = require("slugify");

const directoryPath = path.join(process.cwd(), "/src/artwork-images");

fs.readdir(directoryPath, (err, files) => {
  if (err) {
    console.error(err);
    return;
  }

  // process each file in the directory
  files.forEach((file) => {
    const oldPath = path.join(directoryPath, file);
    const newPath = path.join(directoryPath, slugify(file, { lower: true }));

    fs.rename(oldPath, newPath, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log(`${oldPath} renamed to ${newPath}`);
      }
    });
  });
});
