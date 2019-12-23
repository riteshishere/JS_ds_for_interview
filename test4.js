var assert = require("assert");
var assesment = require("./4find_gcd");
describe("it should return GCD", function() {
  it("it should return 7", function() {
    assert.deepEqual(assesment(14,21), 7);
  });

  it("it should return 1", function() {
    assert.deepEqual(assesment(69,169), 1);
  });

  it("it should return 1", function() {
    assert.deepEqual(assesment(97,21), 1);
  });

  it("it should return 1", function() {
    assert.deepEqual(assesment(19,24), 1);
  });

  it("it should return 2", function() {
    assert.deepEqual(assesment(14,124), 2);
  });
});