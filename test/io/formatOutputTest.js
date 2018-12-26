const assert = require("assert");
const { formatter } = require("../../src/io/formatOutput.js");

describe("formatter", () => {
  it("should return lines, words, bytes and filePath seperated by tabs", () => {
    let counts = {
      filePath: "file1",
      lineCount: 3,
      wordCount: 20,
      byteCount: 67
    };
    let actual = formatter(counts);

    let expected = "\t3\t20\t67 file1";
    assert.equal(actual, expected);
  });
});
