const fs = require("fs");
const { wc } = require("./src/lib.js");
const { parse } = require("./src/io/parse.js");
const { formatOutput } = require("./src/io/formatOutput.js");

const main = function() {
  let parsedArgs = parse(process.argv.slice(2));
  let countDetail = wc(parsedArgs, fs);
  console.log(formatOutput(countDetail, parsedArgs.options));
};

main();
