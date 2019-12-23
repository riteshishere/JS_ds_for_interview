var assert = require("assert");
var assesment = require("./32point_in_circle");
describe("it should check if point lies", function() {
  it("it should return true1", function() {
    assert.deepEqual(assesment(0, 0, 2, 4, 6), true);
  });

  it("it should return false", function() {
    assert.deepEqual(assesment(0, 0, 6, 8, 6), false);
  });

  it("it should return true2", function() {
    assert.deepEqual(assesment(0, 0, 6, 3, 9), true);
  });

  it("it should return false", function() {
    assert.deepEqual(assesment(0, 0, 6, 9, 6), false);
  });

  it("it should return false", function() {
    assert.deepEqual(assesment(0, 0, 3, 8, 6), false);
  });
});