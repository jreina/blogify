const mocha = require("mocha");
const assert = require("assert");
const templates = require("../src/templates.js");

describe("templates", function() {
  describe("html", function() {
    describe("#()", function() {
      it("should return a level-1 HTML heading.", function(done) {
        const expected = "<h1>Hello, world!</h1>";
        const actual = templates.html.heading(1)("Hello, world!");
        assert.equal(actual, expected);
        done();
      });

      it("should return a level-2 HTML heading.", function(done) {
        const expected = "<h2>Hello, world!</h2>";
        const actual = templates.html.heading(2)("Hello, world!");
        assert.equal(actual, expected);
        done();
      });

      it("should return a level-3 HTML heading.", function(done) {
        const expected = "<h3>Hello, world!</h3>";
        const actual = templates.html.heading(3)("Hello, world!");
        assert.equal(actual, expected);
        done();
      });
    });
  });
});
