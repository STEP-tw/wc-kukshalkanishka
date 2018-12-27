const assert = require("assert");
const { parse } = require("../../src/io/parse.js");

describe("parse", () => {
  describe("parse for single option", () => {
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
  });
  describe("parse for more than one option wihtout seperation", () => {
    it("should provide wordCount and lineCount as options when [-wl] is provided", () => {
      let expected = {
        options: ["wordCount", "lineCount"],
        filePath: "file1"
      };
      assert.deepEqual(parse(["-wl", "file1"]), expected);
    });

    it("should provide line and byte count as options when [-lc] is provided", () => {
      let expected = {
        options: ["lineCount", "byteCount"],
        filePath: "file1"
      };
      assert.deepEqual(parse(["-lc", "file1"]), expected);
    });

    it("should provide wordCount and lineCount as options when [-wc] is provided", () => {
      let expected = {
        options: ["wordCount", "byteCount"],
        filePath: "file1"
      };
      assert.deepEqual(parse(["-wc", "file1"]), expected);
    });
  });

  describe("parse for options seperated by spaces", () => {
    it("should provide wordCount and lineCount as options when [-l -c] is provided", () => {
      let expected = {
        options: ["lineCount", "byteCount"],
        filePath: "file1"
      };
      assert.deepEqual(parse(["-l", "-c", "file1"]), expected);
    });

    it("should provide wordCount and byteCount as options when [-w -c] is provided", () => {
      let expected = {
        options: ["wordCount", "byteCount"],
        filePath: "file1"
      };
      assert.deepEqual(parse(["-w", "-c", "file1"]), expected);
    });

    it("should provide wordCount and lineCount as options when [-w -l] is provided", () => {
      let expected = {
        options: ["wordCount", "lineCount"],
        filePath: "file1"
      };
      assert.deepEqual(parse(["-w", "-l", "file1"]), expected);
    });

    it("should provide wordCount and lineCount as options when [-l, -c, -w] is provided", () => {
      let expected = {
        options: ["lineCount", "byteCount", "wordCount"],
        filePath: "file1"
      };
      assert.deepEqual(parse(["-l", "-c", "-w", "file1"]), expected);
    });
  });
});
