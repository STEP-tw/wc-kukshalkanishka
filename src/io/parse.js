const { HYPHEN, EMPTY } = require("../constants");

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

const getOptionsAndFilePath = function(userArgs) {
  let args = userArgs.slice();
  let userOptions = [];
  while (args[0].startsWith(HYPHEN)) {
    let option = args[0].slice(1);
    userOptions = userOptions.concat(option.split(EMPTY));
    args.shift();
  }
  filePaths = args;
  return { userOptions, filePaths };
};

const parse = function(args) {
  let { filePaths, userOptions } = getOptionsAndFilePath(args);
  let options = userOptions.map(userOption => counters[userOption]);
  let sortedOptions = sortOptions(options);
  if (userOptions.length === 0) {
    sortedOptions = allOptions;
  }
  let formatter = getFormatter(filePaths);
  return { options: sortedOptions, filePaths, formatter };
};

module.exports = { parse };
