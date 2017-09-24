const lineTransforms = require("./linetransforms");

const presets = {
  tpd: function(lines) {
    return lines.map(lineTransforms.replaceGistScriptWithLiquid);
  },
  sitefinity: function(lines) {
    return lines;
  }
};

const blogify = function(preset) {
  return function(lines) {
    if (!Array.isArray(lines)) {
      return new Error("Input must be in the form of an array of strings.");
    }
    return presets[preset](lines);
  };
};

module.exports = blogify;
