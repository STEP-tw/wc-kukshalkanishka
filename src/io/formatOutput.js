const { TAB, SPACE } = require("../constants.js");

const formatOutput = function(countDetails, options) {
  counts = options.map(option => countDetails[option]);
  return TAB + counts.join(TAB) + SPACE + countDetails.filePath;
};

module.exports = { formatOutput };
