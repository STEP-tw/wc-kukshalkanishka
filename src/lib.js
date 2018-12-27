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

const wc = function({ filePath }, fs) {
  let content = fs.readFileSync(filePath, "utf8");
  let counts = {
    lineCount: countLines(content),
    byteCount: countBytes(content),
    wordCount: countWords(content),
    filePath: filePath
  };
  return counts;
};

module.exports = { wc };
