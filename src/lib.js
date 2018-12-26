const getCount = function(content, delimiter) {
  return content.split(delimiter).length;
};

const getPrintableLines = function(content) {
  return content.split("\n").filter(x => x != "");
};

const reducer = function(count, line) {
  let wordPerLine = line.split(" ").length;
  return wordPerLine + count;
};

const getWordCount = function(content) {
  let lines = getPrintableLines(content);
  return lines.reduce(reducer, 0);
};

const wc = function(filePath, fs) {
  let content = fs.readFileSync(filePath, "utf8");
  let lineCount = getCount(content, "\n") - 1;
  let wordCount = getWordCount(content);
  let byteCount = getCount(content, "");
  return { filePath, lineCount, wordCount, byteCount };
};

const formatter = function(countDetails) {
  let { filePath, lineCount, wordCount, byteCount } = countDetails;
  return (
    "\t" + lineCount + "\t" + wordCount + "\t" + byteCount + " " + filePath
  );
};

module.exports = { wc, formatter };
