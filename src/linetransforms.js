const patterns = require("./patterns");
const templates = require("./templates");

const lineToLineTransforms = {
  replaceGistScriptWithLiquid: line => {
    if (!patterns.html.script.test(line)) return line;
    patterns.html.script.lastIndex = 0;
    let [, url] = patterns.html.script.exec(line);
    let newTag = line.replace(patterns.html.script, templates.liquid.gist(url));
    return newTag;
  },
  replaceMarkdownHeading: line => {
    let pattern = patterns.markdown.heading;
    let matches = pattern.exec(line).slice(1);
    let headingLevel = matches.filter(match => match === "#").length;
    let content = matches[matches.length - 1];
    return templates.html.heading(headingLevel)(content);
  }
};

module.exports = lineToLineTransforms;
