const mockReader = function(expectedFiles) {
  return function(actualPath) {
    return expectedFiles[actualPath];
  };
};

module.exports = { mockReader };
