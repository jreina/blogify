const mocha = require("mocha");
const assert = require("assert");
const blogify = require("../src/blogify.js");
const fs = require("fs");

const expected = fs.readFileSync("./test-data/tpd.txt", "utf8").split("\r\n");
const input = fs.readFileSync("./test-data/jekyll.txt", "utf8").split("\r\n");

describe("blogify", function() {
  describe("#blogify()", function() {
    it("should produce the correct output for the TPD preset", function(done) {
      let actual = blogify("tpd")(input);
      assert.equal(actual, expected);
      done();
    });
  });
});
