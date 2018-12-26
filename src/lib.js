const { NEWLINE, EMPTY } = require("./constants.js");
const newlineOrSpace = /[ \n]+/;

const getCount = function(content, delimiter) {
  return content.split(delimiter).length;
};

const getWordCount = function(content) {
  let trimmedContent = content.trim();
  return getCount(trimmedContent, newlineOrSpace);
};

const getCounts = function(content) {
  let lineCount = getCount(content, NEWLINE) - 1;
  let wordCount = getWordCount(content);
  let byteCount = getCount(content, EMPTY);
  return { lineCount, wordCount, byteCount };
};

const wc = function(filePath, fs) {
  let content = fs.readFileSync(filePath, "utf8");
  let { lineCount, wordCount, byteCount } = getCounts(content);
  return { lineCount, wordCount, byteCount, filePath };
};

module.exports = { wc };
