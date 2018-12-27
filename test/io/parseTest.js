const assert = require("assert");
const { parse } = require("../../src/io/parse.js");

describe("parse", () => {
  describe("parse for single option", () => {
    it("should provide options as allCounts when no options is given", () => {
      let expected = {
        options: ["lineCount", "wordCount", "byteCount"],
        filePaths: ["file1"],
        formatter: "singleFile"
      };

      assert.deepEqual(parse(["file1"]), expected);
    });

    it("should provide line as an options when [-l] is provided", () => {
      let expected = {
        options: ["lineCount"],
        filePaths: ["file1"],
        formatter: "singleFile"
      };

      assert.deepEqual(parse(["-l", "file1"]), expected);
    });

    it("should provide byte as an options when [-c] is provided", () => {
      let expected = {
        options: ["byteCount"],
        filePaths: ["file1"],
        formatter: "singleFile"
      };

      assert.deepEqual(parse(["-c", "file1"]), expected);
    });

    it("should provide word as an options when [-w] is provided", () => {
      let expected = {
        options: ["wordCount"],
        filePaths: ["file1"],
        formatter: "singleFile"
      };

      assert.deepEqual(parse(["-w", "file1"]), expected);
    });
  });
  describe("parse for more than one option wihtout seperation", () => {
    it("should provide wordCount and lineCount as options when [-wl] is provided", () => {
      let expected = {
        options: ["lineCount", "wordCount"],
        filePaths: ["file1"],
        formatter: "singleFile"
      };

      assert.deepEqual(parse(["-wl", "file1"]), expected);
    });

    it("should provide line and byte count as options when [-lc] is provided", () => {
      let expected = {
        options: ["lineCount", "byteCount"],
        filePaths: ["file1"],
        formatter: "singleFile"
      };

      assert.deepEqual(parse(["-lc", "file1"]), expected);
    });

    it("should provide wordCount and lineCount as options when [-wc] is provided", () => {
      let expected = {
        options: ["wordCount", "byteCount"],
        filePaths: ["file1"],
        formatter: "singleFile"
      };

      assert.deepEqual(parse(["-wc", "file1"]), expected);
    });
  });

  describe("parse for options seperated by spaces", () => {
    it("should provide wordCount and lineCount as options when [-l -c] is provided", () => {
      let expected = {
        options: ["lineCount", "byteCount"],
        filePaths: ["file1"],
        formatter: "singleFile"
      };

      assert.deepEqual(parse(["-l", "-c", "file1"]), expected);
    });

    it("should provide wordCount and byteCount as options when [-w -c] is provided", () => {
      let expected = {
        options: ["wordCount", "byteCount"],
        filePaths: ["file1"],
        formatter: "singleFile"
      };

      assert.deepEqual(parse(["-w", "-c", "file1"]), expected);
    });

    it("should provide wordCount and lineCount as options when [-w -l] is provided", () => {
      let expected = {
        options: ["lineCount", "wordCount"],
        filePaths: ["file1"],
        formatter: "singleFile"
      };

      assert.deepEqual(parse(["-w", "-l", "file1"]), expected);
    });

    it("should provide wordCount and lineCount as options when [-l, -c, -w] is provided", () => {
      let expected = {
        options: ["lineCount", "wordCount", "byteCount"],
        filePaths: ["file1"],
        formatter: "singleFile"
      };

      assert.deepEqual(parse(["-l", "-c", "-w", "file1"]), expected);
    });
  });
  describe("parse for multiple files", () => {
    it("should return multiple files in an array when multiple files is provided", () => {
      let expected = {
        options: ["lineCount", "wordCount", "byteCount"],
        filePaths: ["file1", "file2"],
        formatter: "multiFile"
      };

      assert.deepEqual(parse(["file1", "file2"]), expected);
    });
  });
});
