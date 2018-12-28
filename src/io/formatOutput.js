const { TAB, SPACE, NEWLINE } = require("../constants.js");

const formatOutput = function(fileDetails, options) {
  const allCounts = fileDetails.map(countDetail => {
    counts = options.map(option => countDetail[option]);
    return TAB + counts.join(TAB) + SPACE + countDetail.filePath;
  });
  return allCounts.join(NEWLINE);
};

const singleFileFormatter = function(countDetails, options) {
  return formatOutput(countDetails, options);
};

const multipleFileFormatter = function(fileDetails, options) {
  const detailsClone = fileDetails.slice();
  detailsClone.push(getCountsTotal(fileDetails));
  return formatOutput(detailsClone, options);
};

const getCountsTotal = function(fileDetails) {
  const total = fileDetails.reduce((file1, file2) => {
    const lineCount = file1.lineCount + file2.lineCount;
    const wordCount = file1.wordCount + file2.wordCount;
    const byteCount = file1.byteCount + file2.byteCount;
    const filePath = "total";
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
