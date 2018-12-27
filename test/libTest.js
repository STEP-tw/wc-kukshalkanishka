const assert = require("assert");
const { wc } = require("../src/lib.js");
const { mockReader } = require("./testHelpers/mockReader.js");

describe("wc", () => {
  const fs = {};
  let file1Content =
    "this is a line 1\n" +
    "this is a line 2\n" +
    "this is a line 3\n" +
    "this is a line 4";

  let singleLine = "this is a line";
  fs.readFileSync = mockReader({
    file1: file1Content,
    file2: singleLine
  });
  describe("wc without option, for single file", () => {
    it("should return the filePath, lines, words and bytes count of the provided file", () => {
      let actual = wc(
        {
          options: ["lineCount", "wordCount", "byteCount"],
          filePaths: ["file1"]
        },
        fs
      );
      let expected = [
        {
          filePath: "file1",
          lineCount: 3,
          wordCount: 20,
          byteCount: 67
        }
      ];
      assert.deepEqual(actual, expected);
    });

    it("should give lineCount as 0 for single line file", () => {
      let actual = wc(
        {
          options: ["lineCount", "wordCount", "byteCount"],
          filePaths: ["file2"]
        },
        fs
      );
      let expected = [
        {
          filePath: "file2",
          lineCount: 0,
          wordCount: 4,
          byteCount: 14
        }
      ];
      assert.deepEqual(actual, expected);
    });
    it("should give array of two fileDetails when two files are provided", () => {
      let actual = wc(
        {
          options: ["lineCount", "wordCount", "byteCount"],
          filePaths: ["file1", "file2"]
        },
        fs
      );
      let expected = [
        {
          filePath: "file1",
          lineCount: 3,
          wordCount: 20,
          byteCount: 67
        },
        {
          filePath: "file2",
          lineCount: 0,
          wordCount: 4,
          byteCount: 14
        }
      ];
      assert.deepEqual(actual, expected);
    });
  });
});
