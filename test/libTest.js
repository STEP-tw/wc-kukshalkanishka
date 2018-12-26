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
        { options: ["lineCount", "wordCount", "byteCount"], filePath: "file1" },
        fs
      );
      let expected = {
        filePath: "file1",
        lineCount: 3,
        wordCount: 20,
        byteCount: 67
      };
      assert.deepEqual(actual, expected);
    });

    it("should give lineCount as 0 for single line file", () => {
      let actual = wc(
        { options: ["lineCount", "wordCount", "byteCount"], filePath: "file2" },
        fs
      );
      let expected = {
        filePath: "file2",
        lineCount: 0,
        wordCount: 4,
        byteCount: 14
      };
      assert.deepEqual(actual, expected);
    });
  });

  describe("wc with option for single file", () => {
    it("should only return lineCount and filePath's value when option is line", () => {
      let actual = wc({ options: ["lineCount"], filePath: "file1" }, fs);
      let expected = {
        filePath: "file1",
        byteCount: undefined,
        wordCount: undefined,
        lineCount: 3
      };
      assert.deepEqual(actual, expected);
    });

    it("should only return byteCount and filePath's value when option is byte", () => {
      let actual = wc({ options: ["byteCount"], filePath: "file1" }, fs);
      let expected = {
        filePath: "file1",
        lineCount: undefined,
        wordCount: undefined,
        byteCount: 67
      };
      assert.deepEqual(actual, expected);
    });

    it("should only return byteCount and filePath's value when option is byte", () => {
      let actual = wc({ options: ["wordCount"], filePath: "file1" }, fs);
      let expected = {
        filePath: "file1",
        lineCount: undefined,
        byteCount: undefined,
        wordCount: 20
      };
      assert.deepEqual(actual, expected);
    });
  });
});
