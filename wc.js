const fs = require("fs");
const { wc } = require("./src/lib.js");
const { formatter } = require("./src/io/formatOutput.js");

const main = function() {
  let filePath = process.argv[2];
  let countDetail = wc(filePath, fs);
  console.log(formatter(countDetail));
};

main();
