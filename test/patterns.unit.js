const mocha = require("mocha");
const assert = require("assert");
const patterns = require("../src/patterns.js");

describe("patterns", function() {
  describe("html", function() {
    describe("#script", function() {
      it("should match an html script tag.", function(done) {
        const input = '<script src="http://example.com"></script>';
        assert.equal(patterns.html.script.test(input), true);
        done();
      });

      it("should match an html script tag with a type attribute.", function(
        done
      ) {
        const input =
          '<script src="http://example.com" type="text/javascript"></script>';
        assert.equal(patterns.html.script.test(input), true);
        done();
      });

      it("should match an html script tag with a async attribute.", function(
        done
      ) {
        const input = '<script src="http://example.com" async></script>';
        assert.equal(patterns.html.script.test(input), true);
        done();
      });

      it("should match a fully-loaded script tag.", function(done) {
        const input =
          '<script defer type="text/javascript" src="http://example.com" async charset="utf-8"></script>';
        assert.equal(patterns.html.script.test(input), true);
        done();
      });
    });
  });
  describe("markdown", function() {
    describe("#heading", function() {
      it("should match an L1 heading tag.", function(done) {
        const input = "# hello, world!";
        assert.equal(patterns.markdown.heading.test(input), true);
        done();
      });

      it("should match an L2 heading tag.", function(done) {
        const input = "## hello, world!";
        assert.equal(patterns.markdown.heading.test(input), true);
        done();
      });

      it("should match an L3 heading tag.", function(done) {
        const input = "### hello, world!";
        assert.equal(patterns.markdown.heading.test(input), true);
        done();
      });
    });

    describe("#link", function() {
      it("should match a link tag.", function(done) {
        const input = "[This is a link](https://example.com)";
        assert.equal(patterns.markdown.link.test(input), true);
        done();
      });

      it("should ignore an image tag.", function(done) {
        const input =
          '![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")';
        assert.equal(patterns.markdown.link.test(input), false);
        done();
      });
    });
  });
});
