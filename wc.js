const fs = require("fs");
const { wc } = require("./src/lib.js");
const { parse } = require("./src/io/parse.js");
const { formatters } = require("./src/io/formatOutput.js");

const main = function() {
  const parsedArgs = parse(process.argv.slice(2));
  const fileDetails = wc(parsedArgs, fs);
  const formatter = formatters[parsedArgs.formatter];
  console.log(formatter(fileDetails, parsedArgs.options));
};

main();
