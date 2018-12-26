const assert = require("assert");
const { wc } = require("../src/lib.js");
const { mockReader } = require("./testHelpers/mockReader.js");

describe("wc", () => {
  let fs = {};
  let file1Content =
    "this is a line 1\n" +
    "this is a line 2\n" +
    "this is a line 3\n" +
    "this is a line 4";

  let singleLine = "this is a line";
  fs.readFileSync = mockReader({
    file1: file1Content,
    file2: singleLine,
    file3: ""
  });

  it("should return the filePath, lines, words and bytes count of the provided file", () => {
    let expected = {
      filePath: "file1",
      lineCount: 3,
      wordCount: 20,
      byteCount: 67
    };
    assert.deepEqual(wc("file1", fs), expected);
  });

  it("should give lineCount as 0 for single line file", () => {
    let expected = {
      filePath: "file2",
      lineCount: 0,
      wordCount: 4,
      byteCount: 14
    };
    assert.deepEqual(wc("file2", fs), expected);
  });
});
