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
    if (!patterns.markdown.heading.test(line)) return line;
    let [, headingTag, content] = patterns.markdown.heading.exec(line);
    let headingLevel = headingTag.trim().length;
    return templates.html.heading(headingLevel)(content);
  }
};

module.exports = lineToLineTransforms;
