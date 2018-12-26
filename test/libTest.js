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
  fs.readFileSync = mockReader({ file1: file1Content });

  it("should return the filePath, lines, words and bytes count of the provided file", () => {
    let expected = {
      filePath: "file1",
      lineCount: 3,
      wordCount: 20,
      byteCount: 67
    };
    assert.deepEqual(wc("file1", fs), expected);
  });
});
