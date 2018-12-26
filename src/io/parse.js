parseForNoOption = function(args) {
  filePath = args[0];
  return { options, filePath };
};

const counters = { l: "lineCount", c: "byteCount", w: "wordCount" };

const getOptions = function(arg) {
  let userOptions = arg.split("");
  return userOptions.map(userOption => counters[userOption]);
};

const startWithDash = option => option.startsWith("-");

const parse = function(args) {
  let firstArg = args[0];
  let options = getOptions(firstArg.slice(1));
  let filePath = args[1];

  if (!startWithDash(firstArg)) {
    options = ["lineCount", "wordCount", "byteCount"];
    filePath = args[0];
  }

  return { options, filePath };
};

module.exports = { parse };
