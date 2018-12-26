const assert = require("assert");
const { parse } = require("../../src/io/parse.js");

describe("parse", () => {
  it("should provide options as allCounts when no options is given", () => {
    let expected = {
      options: ["lineCount", "wordCount", "byteCount"],
      filePath: "file1"
    };
    assert.deepEqual(parse(["file1"]), expected);
  });

  it("should provide line as an options when [-l] is provided", () => {
    let expected = {
      options: ["lineCount"],
      filePath: "file1"
    };
    assert.deepEqual(parse(["-l", "file1"]), expected);
  });

  it("should provide byte as an options when [-c] is provided", () => {
    let expected = {
      options: ["byteCount"],
      filePath: "file1"
    };
    assert.deepEqual(parse(["-c", "file1"]), expected);
  });

  it("should provide word as an options when [-w] is provided", () => {
    let expected = {
      options: ["wordCount"],
      filePath: "file1"
    };
    assert.deepEqual(parse(["-w", "file1"]), expected);
  });

  it("should provide wordCount and lineCount as options then [-lc] is provided", () => {
    let expected = {
      options: ["wordCount", "lineCount"],
      filePath: "file1"
    };
    assert.deepEqual(parse(["-wl", "file1"]), expected);
  });
});
