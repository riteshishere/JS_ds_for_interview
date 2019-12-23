var assert = require("assert");
var assesment = require("./21isAnagram");
describe("it should check anagram", function() {
  it("it should return true1", function() {
    assert.deepEqual(assesment('monk','konm'), true);
  });

  it("it should return true", function() {
    assert.deepEqual(assesment('dell','ledl'), true);
  });

  it("it should return true2", function() {
    assert.deepEqual(assesment('bbc','cbb'), true);
  });

  it("it should return true", function() {
    assert.deepEqual(assesment('lenovo','ovonel'), true);
  });

  it("it should return false", function() {
    assert.deepEqual(assesment('hpstate','shaptee'), false);
  });
});