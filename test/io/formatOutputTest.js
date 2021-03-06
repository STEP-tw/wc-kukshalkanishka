const assert = require("assert");
const {
  formatOutput,
  singleFileFormatter,
  multipleFileFormatter
} = require("../../src/io/formatOutput.js");

describe("formatOutput", () => {
  it("should return lines, words, bytes and filePath seperated by tabs", () => {
    let counts = [
      {
        filePath: "file1",
        lineCount: 3,
        wordCount: 20,
        byteCount: 67
      }
    ];
    let actual = formatOutput(counts, ["lineCount", "wordCount", "byteCount"]);

    let expected = "\t3\t20\t67 file1";
    assert.equal(actual, expected);
  });

  it("should return lines and filePath seperated by space", () => {
    let counts = [
      {
        filePath: "file1",
        lineCount: 3,
        wordCount: 20,
        byteCount: 67
      }
    ];
    let actual = formatOutput(counts, ["lineCount"]);
    let expected = "\t3 file1";

    assert.equal(actual, expected);
  });

  it("should return byteCount and filePath seperated by space", () => {
    let counts = [
      {
        filePath: "file1",
        byteCount: 20,
        wordCount: 4,
        lineCount: 2
      }
    ];
    let actual = formatOutput(counts, ["byteCount"]);
    let expected = "\t20 file1";

    assert.equal(actual, expected);
  });

  it("should return wordCount and filePath seperated by space", () => {
    let counts = [
      {
        filePath: "file1",
        wordCount: 67,
        byteCount: 30,
        lineCount: 2
      }
    ];
    let actual = formatOutput(counts, ["wordCount"]);

    let expected = "\t67 file1";
    assert.equal(actual, expected);
  });

  it("should return word and line count seperated by tab and fileCount with space", () => {
    let counts = [
      {
        filePath: "file1",
        wordCount: 67,
        lineCount: 3,
        byteCount: 55
      }
    ];
    let actual = formatOutput(counts, ["lineCount", "wordCount"]);
    let expected = "\t3\t67 file1";

    assert.equal(actual, expected);
  });

  it("should return word and byte count seperated by tab and fileCount with space", () => {
    let counts = [
      {
        filePath: "file1",
        wordCount: 67,
        lineCount: 3,
        byteCount: 120
      }
    ];
    let actual = formatOutput(counts, ["wordCount", "byteCount"]);
    let expected = "\t67\t120 file1";

    assert.equal(actual, expected);
  });

  it("should return byte and line count seperated by tab and fileCount with space", () => {
    let counts = [
      {
        filePath: "file1",
        wordCount: 33,
        lineCount: 3,
        byteCount: 120
      }
    ];
    let actual = formatOutput(counts, ["lineCount", "byteCount"]);

    let expected = "\t3\t120 file1";
    assert.equal(actual, expected);
  });
});

describe("singel file formatter", () => {
  it("should return required counts of particular file", () => {
    let counts = [
      {
        filePath: "file1",
        wordCount: 33,
        lineCount: 3,
        byteCount: 120
      }
    ];
    let actual = singleFileFormatter(counts, [
      "lineCount",
      "wordCount",
      "byteCount"
    ]);
    let expected = "\t3\t33\t120 file1";
    assert.equal(actual, expected);
  });
});

describe("multiple file formatter", () => {
  it("should return required counts with total of counts", () => {
    let counts = [
      {
        filePath: "file1",
        wordCount: 33,
        lineCount: 3,
        byteCount: 120
      },
      { filePath: "file2", wordCount: 3, lineCount: 1, byteCount: 4 }
    ];
    let actual = multipleFileFormatter(counts, [
      "lineCount",
      "wordCount",
      "byteCount"
    ]);
    let expected = "\t3\t33\t120 file1\n\t1\t3\t4 file2\n\t4\t36\t124 total";
    assert.equal(actual, expected);
  });
});
