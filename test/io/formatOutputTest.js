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
    let actual = formatOutput(counts);

    let expected = "\t3\t20\t67 file1";
    assert.equal(actual, expected);
  });

  it("should return lines and filePath seperated by space", () => {
    let counts = {
      filePath: "file1",
      lineCount: 3,
      wordCount: undefined,
      byteCount: undefined
    };
    let actual = formatOutput(counts);

    let expected = "\t3 file1";
    assert.equal(actual, expected);
  });

  it("should return byteCount and filePath seperated by space", () => {
    let counts = {
      filePath: "file1",
      byteCount: 20,
      wordCount: undefined,
      lineCount: undefined
    };
    let actual = formatOutput(counts);

    let expected = "\t20 file1";
    assert.equal(actual, expected);
  });

  it("should return wordCount and filePath seperated by space", () => {
    let counts = {
      filePath: "file1",
      wordCount: 67,
      byteCount: undefined,
      lineCount: undefined
    };
    let actual = formatOutput(counts);

    let expected = "\t67 file1";
    assert.equal(actual, expected);
  });

  it("should return word and line count seperated by tab and fileCount with space", () => {
    let counts = {
      filePath: "file1",
      wordCount: 67,
      lineCount: 3,
      byteCount: undefined
    };
    let actual = formatOutput(counts);

    let expected = "\t3\t67 file1";
    assert.equal(actual, expected);
  });

  it("should return word and byte count seperated by tab and fileCount with space", () => {
    let counts = {
      filePath: "file1",
      wordCount: 67,
      lineCount: undefined,
      byteCount: 120
    };
    let actual = formatOutput(counts);

    let expected = "\t67\t120 file1";
    assert.equal(actual, expected);
  });

  it("should return byte and line count seperated by tab and fileCount with space", () => {
    let counts = {
      filePath: "file1",
      wordCount: undefined,
      lineCount: 3,
      byteCount: 120
    };
    let actual = formatOutput(counts);

    let expected = "\t3\t120 file1";
    assert.equal(actual, expected);
  });
});
