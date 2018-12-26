const assert = require("assert");
const { formatOutput } = require("../../src/io/formatOutput.js");

describe("formatOutput", () => {
  it("should return lines, words, bytes and filePath seperated by tabs", () => {
    let counts = {
      filePath: "file1",
      lineCount: 3,
      wordCount: 20,
      byteCount: 67
    };
    let actual = formatOutput("nonOption", counts);

    let expected = "\t3\t20\t67 file1";
    assert.equal(actual, expected);
  });

  it("should return lines and filePath seperated by space", () => {
    let counts = {
      filePath: "file1",
      lineCount: 3
    };
    let actual = formatOutput("line", counts);

    let expected = "\t3 file1";
    assert.equal(actual, expected);
  });

  it("should return byteCount and filePath seperated by space", () => {
    let counts = {
      filePath: "file1",
      byteCount: 20
    };
    let actual = formatOutput("byte", counts);

    let expected = "\t20 file1";
    assert.equal(actual, expected);
  });

  it("should return wordCount and filePath seperated by space", () => {
    let counts = {
      filePath: "file1",
      wordCount: 67
    };
    let actual = formatOutput("word", counts);

    let expected = "\t67 file1";
    assert.equal(actual, expected);
  });
});
