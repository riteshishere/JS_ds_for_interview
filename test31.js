var assert = require("assert");
var assesment = require("./31increasing_sequence");
describe("it should check increasing sequence", function() {
  it("it should return true1", function() {
    assert.deepEqual(assesment(123), true);
  });

  it("it should return false", function() {
    assert.deepEqual(assesment(1223), false);
  });

  it("it should return false", function() {
    assert.deepEqual(assesment(12587), false);
  });

  it("it should return false", function() {
    assert.deepEqual(assesment(45677), false);
  });

  it("it should return false", function() {
    assert.deepEqual(assesment(25849), false);
  });
});