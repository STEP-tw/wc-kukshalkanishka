const counters = { l: "lineCount", c: "byteCount", w: "wordCount" };

const getOptionsAndFilePath = function(userArgs) {
  let args = userArgs.slice();
  let userOptions = [];

  while (args[0].startsWith("-")) {
    userOptions = userOptions.concat(args[0].slice(1).split(""));
    args.shift();
  }
  filePath = args.pop();
  return { userOptions, filePath };
};

const parse = function(args) {
  let { filePath, userOptions } = getOptionsAndFilePath(args);
  if (userOptions.length == 0) {
    userOptions = ["l", "w", "c"];
  }

  let options = userOptions.map(userOption => counters[userOption]);
  return { options, filePath };
};

module.exports = { parse };
