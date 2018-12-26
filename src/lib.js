const { NEWLINE, EMPTY } = require("./constants.js");
const newlineOrSpace = /[ \n]+/;

const getCount = function(delimiter, content) {
  return content.split(delimiter).length;
};

const countWords = function(content) {
  let trimmedContent = content.trim();
  return getCount(newlineOrSpace, trimmedContent);
};

const countLines = function(content) {
  return getCount(NEWLINE, content) - 1;
};

const countBytes = function(content) {
  return getCount(EMPTY, content);
};

const getAllCounts = function(content) {
  let lineCount = countLines(content);
  let wordCount = countWords(content);
  let byteCount = countBytes(content);
  return { lineCount, wordCount, byteCount };
};

const counters = {
  lineCount: countLines,
  byteCount: countBytes,
  wordCount: countWords,
  allCounts: getAllCounts
};

const wc = function({ filePath, option }, fs) {
  let content = fs.readFileSync(filePath, "utf8");
  let counts = {
    lineCount: undefined,
    byteCount: undefined,
    wordCount: undefined
  };
  let counter = counters[option];
  counts[option] = counter(content);

  if (counter === getAllCounts) {
    counts = getAllCounts(content);
  }

  counts.filePath = filePath;
  return counts;
};

module.exports = { wc };
