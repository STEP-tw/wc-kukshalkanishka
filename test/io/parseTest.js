const assert = require("assert");
const { parse } = require("../../src/io/parse.js");

describe("parse", () => {
  it("should provide option as allCounts when no option is given", () => {
    let expected = {
      option: "allCounts",
      filePath: "file1",
      formatter: "nonOption"
    };
    assert.deepEqual(parse(["file1"]), expected);
  });

  it("should provide line as an option when [-l] is provided", () => {
    let expected = {
      option: "lineCount",
      filePath: "file1",
      formatter: "line"
    };
    assert.deepEqual(parse(["-l", "file1"]), expected);
  });
});
