var assert = require("assert");
var assesment = require("./28rearrangement_characters");
describe("it should check rearrange characters", function() {
  it("it should return true1", function() {
    assert.deepEqual(assesment('xyz','zyx'), true);
  });

  it("it should return false", function() {
    assert.deepEqual(assesment('xyz','zyp'), false);
  });

  it("it should return true2", function() {
    assert.deepEqual(assesment('ritesh','terihs'), true);
  });

  it("it should return false", function() {
    assert.deepEqual(assesment('mistake','mikaer'), false);
  });

  it("it should return true3", function() {
    assert.deepEqual(assesment('logrithm','thmilogr'), true);
  });
});