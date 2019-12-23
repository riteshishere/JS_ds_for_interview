var assert = require("assert");
var assesment = require("./22findVowels");
describe("it should find vowels", function() {
  it("it should return 3", function() {
    assert.deepEqual(assesment('canada'), 3);
  });

  it("it should return 2", function() {
    assert.deepEqual(assesment('ritesh'), 2);
  });

  it("it should return 0", function() {
    assert.deepEqual(assesment('sdfgh'), 0);
  });

  it("it should return 4", function() {
    assert.deepEqual(assesment('lowercase'), 4);
  });

  it("it should return 3", function() {
    assert.deepEqual(assesment('aswedrte'), 3);
  });
});