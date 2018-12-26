parseForSingleFile = function(args) {
  option = "allCounts";
  filePath = args[0];
  formatter = "nonOption";
  return { option, filePath, formatter };
};

const formatters = { "-l": "line", "-c": "byte", "-w": "word" };
const counters = { "-l": "lineCount", "-c": "byteCount", "-w": "wordCount" };

const parse = function(args) {
  let option = counters[args[0]];
  let filePath = args[1];

  if (args.length === 1) {
    return parseForSingleFile(args);
  }
  let formatter = formatters[args[0]];

  return { option, filePath, formatter };
};

module.exports = { parse };
