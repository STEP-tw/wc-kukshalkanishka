const { TAB, SPACE } = require("../constants.js");

const nonOptionFormatter = function(countDetails) {
  let { filePath, lineCount, wordCount, byteCount } = countDetails;
  return TAB + lineCount + TAB + wordCount + TAB + byteCount + SPACE + filePath;
};

const lineFormatter = function({ lineCount, filePath }) {
  return TAB + lineCount + SPACE + filePath;
};

const formatters = {
  nonOption: nonOptionFormatter,
  line: lineFormatter
};

const formatOutput = function(argsType, countDetails) {
  let formatter = formatters[argsType];
  return formatter(countDetails);
};

module.exports = { formatOutput };
