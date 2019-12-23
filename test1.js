var assert = require("assert");
var assesment = require("./1Verify_a_prime_number?");
describe("it should check prime number", function() {
  it("it should return true1", function() {
    assert.deepEqual(assesment(137), true);
  });

  it("it should return false", function() {
    assert.deepEqual(assesment(237), false);
  });

  it("it should return true2", function() {
    assert.deepEqual(assesment(239), true);
  });

  it("it should return false", function() {
    assert.deepEqual(assesment(385), false);
  });

  it("it should return true3", function() {
    assert.deepEqual(assesment(854), false);
  });
});