const counters = { l: "lineCount", c: "byteCount", w: "wordCount" };

const startWithDash = option => option.startsWith("-");

const getOptionsAndFilePath = function(args) {
  let userOptions = "";
  args.map(function(arg) {
    if (startWithDash(arg)) {
      userOptions += arg.slice(1);
    }
    filePath = arg;
  });
  userOptions = userOptions.split("");
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
