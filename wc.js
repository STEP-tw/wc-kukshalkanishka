const fs = require("fs");
const { wc } = require("./src/lib.js");
const { parse } = require("./src/io/parse.js");
const { formatOutput } = require("./src/io/formatOutput.js");

const main = function() {
  let { formatter, option, filePath } = parse(process.argv.slice(2));
  let countDetail = wc({ option, filePath }, fs);
  console.log(formatOutput(formatter, countDetail));
};

main();
