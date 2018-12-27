const counters = { l: "lineCount", c: "byteCount", w: "wordCount" };

const startWithDash = option => option.startsWith("-");

const parse = function(args) {
  let userOptions = [];
  args.map(function(arg) {
    if (startWithDash(arg)) {
      option = arg.slice(1);
      userOptions.push(option);
      if (option.length > 1) {
        userOptions = option.split("");
      }
    }
    filePath = arg;
  });
  if (userOptions.length == 0) {
    userOptions = ["l", "w", "c"];
  }

  let options = userOptions.map(userOption => counters[userOption]);
  return { options, filePath };
};

module.exports = { parse };
