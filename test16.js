var assert = require("assert");
var assesment = require("./16sumFinder");
describe("it should tell whether the sum is present ?", function() {
  it("it should return true1", function() {
    assert.deepEqual(assesment([6,4,3,2,1,7], 9), true);
  });

  it("it should return false", function() {
    assert.deepEqual(assesment([6,4,3,2,1,7], 2), false);
  });

  it("it should return true2", function() {
    assert.deepEqual(assesment([6,4,3,2,8,2,1,7], 10), true);
  });

  it("it should return false", function() {
    assert.deepEqual(assesment([6,4,3,2,1,7,5,1,3], 19), false);
  });

  it("it should return false", function() {
    assert.deepEqual(assesment([6,41,5,2,3,2,1,7], 15), false);
  });
});