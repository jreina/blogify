const mocha = require("mocha");
const assert = require("assert");
const linetransforms = require("../src/linetransforms.js");

describe("linetransforms", function() {
  describe("#replaceGistScriptWithLiquid()", function() {
    it("should produce the correct output for the TPD preset", function(done) {
      const expected = "{% gist https://gist.github.com/examplegist %}";
      const input =
        '<script src="https://gist.github.com/examplegist"></script>';
      const actual = linetransforms.replaceGistScriptWithLiquid(input);
      assert.equal(actual, expected);
      done();
    });
  });

  describe("#replaceMarkdownHeading()", function() {
    it("should produce the correct output for the TPD preset", function(done) {
      const expected = "<h1>Hello, world!</h1>";
      const input = "# Hello, world!";
      const actual = linetransforms.replaceMarkdownHeading(input);
      assert.equal(actual, expected);
      done();
    });
  });
});
