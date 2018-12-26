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

  it("should provide byte as an option when [-c] is provided", () => {
    let expected = {
      option: "byteCount",
      filePath: "file1",
      formatter: "byte"
    };
    assert.deepEqual(parse(["-c", "file1"]), expected);
  });

  it("should provide word as an option when [-w] is provided", () => {
    let expected = {
      option: "wordCount",
      filePath: "file1",
      formatter: "word"
    };
    assert.deepEqual(parse(["-w", "file1"]), expected);
  });
});
