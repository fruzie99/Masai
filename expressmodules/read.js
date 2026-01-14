const fs = require("fs");

const readFileData = () => {
  return fs.readFileSync("Data.txt", "utf-8");
};

module.exports = readFileData;
