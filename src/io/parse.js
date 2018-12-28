const { HYPHEN, EMPTY_STRING } = require("../constants");

const counters = { l: "lineCount", c: "byteCount", w: "wordCount" };

const allOptions = ["lineCount", "wordCount", "byteCount"];

const sortOptions = function(options) {
  return allOptions.filter(option => options.includes(option));
};

const getFormatter = function(filePaths) {
  if (filePaths.length == 1) {
    return "singleFile";
  }
  return "multiFile";
};

const translateOptions = function(userOptions) {
  const translatedOptions = userOptions.map(userOption => counters[userOption]);
  let sortedOptions = sortOptions(translatedOptions);
  if (userOptions.length === 0) {
    sortedOptions = allOptions;
  }
  return sortedOptions;
};

const getOptionsAndFilePath = function(userArgs) {
  let args = userArgs.slice();
  let userOptions = [];
  while (args[0].startsWith(HYPHEN)) {
    let option = args[0].slice(1);
    userOptions = userOptions.concat(option.split(EMPTY_STRING));
    args.shift();
  }
  filePaths = args;
  const translatedOptions = translateOptions(userOptions);
  return { translatedOptions, filePaths };
};

const parse = function(args) {
  let { filePaths, translatedOptions } = getOptionsAndFilePath(args);
  let formatter = getFormatter(filePaths);
  return { options: translatedOptions, filePaths, formatter };
};

module.exports = { parse };
