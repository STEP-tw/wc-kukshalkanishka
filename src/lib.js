const { NEWLINE } = require("./constants.js");
const newlineOrSpace = /[ \n]+/;

const getCount = function(delimiter, content) {
  const splitted = content.split(delimiter);
  return splitted.length;
};

const countWords = function(content) {
  const trimmedContent = content.trim();
  const words = trimmedContent.split(newlineOrSpace);
  const nonEmptyWords = words.filter(word => word);
  return nonEmptyWords.length;
};

const countLines = function(content) {
  return getCount(NEWLINE, content) - 1;
};

const countBytes = function(content) {
  return content.length;
};

const wc = function({ filePaths }, fs) {
  const fileDetails = filePaths.map(filePath => {
    const content = fs.readFileSync(filePath, "utf8");
    const lineCount = countLines(content);
    const byteCount = countBytes(content);
    const wordCount = countWords(content);
    return { lineCount, byteCount, wordCount, filePath };
  });
  return fileDetails;
};

module.exports = { wc };
