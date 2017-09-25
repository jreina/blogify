const lineTransforms = require("./linetransforms");

const presets = {
  tpd: function(lines) {
    return lines.map(lineTransforms.replaceGistScriptWithLiquid);
  },
  sitefinity: function(lines) {
    return lines;
  }
};

module.exports = presets;
