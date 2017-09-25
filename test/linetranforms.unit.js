const mocha = require("mocha");
const assert = require("assert");
const linetransforms = require("../src/linetransforms.js");

describe("linetransforms", function() {
  describe("#replaceGistScriptWithLiquid()", function() {
    it("should replace an HTML script element with a Liquid Gist tag.", function(
      done
    ) {
      const expected = "{% gist https://gist.github.com/examplegist %}";
      const input =
        '<script src="https://gist.github.com/examplegist"></script>';
      const actual = linetransforms.replaceGistScriptWithLiquid(input);
      assert.equal(actual, expected);
      done();
    });
  });

  describe("#replaceMarkdownHeading()", function() {
    it("should replace first-level markdown heading with an h1.", function(
      done
    ) {
      const expected = "<h1>Hello, world!</h1>";
      const input = "# Hello, world!";
      const actual = linetransforms.replaceMarkdownHeading(input);
      assert.equal(actual, expected);
      done();
    });

    it("should replace second-level markdown heading with an h2.", function(
      done
    ) {
      const expected = "<h2>Hello, world!</h2>";
      const input = "## Hello, world!";
      const actual = linetransforms.replaceMarkdownHeading(input);
      assert.equal(actual, expected);
      done();
    });

    it("should replace third-level markdown heading with an h3.", function(
      done
    ) {
      const expected = "<h3>Hello, world!</h3>";
      const input = "### Hello, world!";
      const actual = linetransforms.replaceMarkdownHeading(input);
      assert.equal(actual, expected);
      done();
    });

    it("should replace fourth-level markdown heading with an h4.", function(
      done
    ) {
      const expected = "<h4>Hello, world!</h4>";
      const input = "#### Hello, world!";
      const actual = linetransforms.replaceMarkdownHeading(input);
      assert.equal(actual, expected);
      done();
    });
  });
});
