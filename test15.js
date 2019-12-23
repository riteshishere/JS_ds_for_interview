var assert = require("assert");
var assesment = require("./15missing_number");
describe("it should check missing number", function() {
  it("it should return 2", function() {
    assert.equal(assesment([1,3,4,5]),2);
  });

  it("it should return 1", function() {
    assert.deepEqual(assesment([2,3,4,5,6,7]), 1);
  });

  it("it should return 6", function() {
    assert.deepEqual(assesment([1,2,3,4,5,7,8,9]), 6);
  });

  it("it should return 4", function() {
    assert.deepEqual(assesment([1,2,3,5,6,7,8,9]), 4);
  });

  it("it should return 4", function() {
    assert.deepEqual(assesment([1,2,3,5,6]), 4);
  });
});