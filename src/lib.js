const { NEWLINE } = require("./constants.js");
const newlineOrSpace = /[ \n]+/;

const getCount = function(delimiter, content) {
  let splitted = content.split(delimiter);
  return splitted.length;
};

const countWords = function(content) {
  let trimmedContent = content.trim();
  return getCount(newlineOrSpace, trimmedContent);
};

const countLines = function(content) {
  return getCount(NEWLINE, content) - 1;
};

const countBytes = function(content) {
  return content.length;
};

const wc = function({ filePaths }, fs) {
  let fileDetails = filePaths.map(filePath => {
    let content = fs.readFileSync(filePath, "utf8");
    let lineCount = countLines(content);
    let byteCount = countBytes(content);
    let wordCount = countWords(content);
    return { lineCount, byteCount, wordCount, filePath };
  });
  return fileDetails;
};

module.exports = { wc };
