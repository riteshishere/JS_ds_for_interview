var assert = require("assert");
var assesment = require("./3get_fibonacci_series");
describe("it should return last term of fibonacci series", function() {
  it("it should return 3", function() {
    assert.deepEqual(assesment(4), 3);
  });

  it("it should return 5", function() {
    assert.deepEqual(assesment(5), 5);
  });

  it("it should return 13", function() {
    assert.deepEqual(assesment(7), 13);
  });

  it("it should return 8", function() {
    assert.deepEqual(assesment(6), 8);
  });

  it("it should return 55", function() {
    assert.deepEqual(assesment(10), 55);
  });
});