const { TAB, SPACE } = require("../constants.js");

const formatOutput = function(countDetails) {
  const { lineCount, byteCount, wordCount, filePath } = countDetails;
  let allCounts = [""];
  allCounts.push(lineCount);
  allCounts.push(wordCount);
  allCounts.push(byteCount);
  let counts = allCounts.filter(count => count != undefined);
  return counts.join(TAB) + SPACE + filePath;
};

module.exports = { formatOutput };
