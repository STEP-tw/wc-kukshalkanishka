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

const counters = {
  lineCount: countLines,
  byteCount: countBytes,
  wordCount: countWords
};

const wc = function({ filePath, options }, fs) {
  let content = fs.readFileSync(filePath, "utf8");
  let counts = {
    lineCount: undefined,
    byteCount: undefined,
    wordCount: undefined
  };
  options.map(function(option) {
    counter = counters[option];
    counts[option] = counter(content);
  });
  counts.filePath = filePath;
  return counts;
};

module.exports = { wc };
