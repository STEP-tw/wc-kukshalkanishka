const { TAB, SPACE } = require("../constants.js");

const formatOutput = function(countDetails, options) {
  let allCounts = countDetails.map(countDetail => {
    counts = options.map(option => countDetail[option]);
    return TAB + counts.join(TAB) + SPACE + countDetail.filePath;
  });
  return allCounts.join("\n");
};

const singleFileFormatter = function(countDetails, options) {
  return formatOutput(countDetails, options);
};

const multipleFileFormatter = function(fileDetails, options) {
  let detailsClone = fileDetails.slice();
  detailsClone.push(getTotalCounts(fileDetails));
  return formatOutput(detailsClone, options);
};

const getTotalCounts = function(countDetails) {
  let total = countDetails.reduce((counts1, counts2) => {
    let lineCount = counts1.lineCount + counts2.lineCount;
    let wordCount = counts1.wordCount + counts2.wordCount;
    let byteCount = counts1.byteCount + counts2.byteCount;
    let filePath = "total";
    return { lineCount, wordCount, byteCount, filePath };
  });
  return total;
};

const formatters = {
  multiFile: multipleFileFormatter,
  singleFile: singleFileFormatter
};

module.exports = {
  formatOutput,
  formatters,
  multipleFileFormatter,
  singleFileFormatter
};
