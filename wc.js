const fs = require("fs");
const { wc } = require("./src/lib.js");
const { parse } = require("./src/io/parse.js");
const { formatters } = require("./src/io/formatOutput.js");

const main = function() {
  let parsedArgs = parse(process.argv.slice(2));
  let countDetail = wc(parsedArgs, fs);
  let formatter = formatters[parsedArgs.formatter];
  console.log(formatter(countDetail, parsedArgs.options));
};

main();
