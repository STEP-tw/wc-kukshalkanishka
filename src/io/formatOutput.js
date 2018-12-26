const { TAB, SPACE } = require("../constants.js");

const formatter = function(countDetails) {
  let { filePath, lineCount, wordCount, byteCount } = countDetails;
  return TAB + lineCount + TAB + wordCount + TAB + byteCount + SPACE + filePath;
};

module.exports = { formatter };
