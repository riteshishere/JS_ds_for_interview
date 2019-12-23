var assert = require("assert");
var assesment = require("./35sum_even_digit");
describe("it should count even digits", function() {
  it("it should return 1", function() {
    assert.deepEqual(assesment(123), 1);
  });

  it("it should return 4", function() {
    assert.deepEqual(assesment(10280), 4);
  });

  it("it should return 2", function() {
    assert.deepEqual(assesment(8754), 2);
  });

  it("it should return 2", function() {
    assert.deepEqual(assesment(4521), 2);
  });

  it("it should return 3", function() {
    assert.deepEqual(assesment(895674), 3);
  });
});