var assert = require("assert");
var assesment = require("./27Kth_greatest_in_array");
describe("it should return Kth greatest", function() {
  it("it should return 4", function() {
    assert.deepEqual(assesment([1,2,6,4,5], 3), 4);
  });

  it("it should return 0", function() {
    assert.deepEqual(assesment([-10,-25,-47,-36,0], 1), 0);
  });

  it("it should return 23", function() {
    assert.deepEqual(assesment([23,21,54,67,54],4), 23);
  });

  it("it should return 45", function() {
    assert.deepEqual(assesment([45,12,45,7,96], 2), 45);
  });

  it("it should return 25", function() {
    assert.deepEqual(assesment([1,23,54,25,45,4],3), 25);
  });
});