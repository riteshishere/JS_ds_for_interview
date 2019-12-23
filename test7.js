var assert = require("assert");
var assesment = require("./7swap_num_without_temp");
describe("it should swap the number", function() {
  it("it should return [3,1]", function() {
    assert.deepEqual(assesment(1,3), [3,1]);
  });

  it("it should return [8,5]", function() {
    assert.deepEqual(assesment(5,8), [8,5]);
  });

  it("it should return [42,45]", function() {
    assert.deepEqual(assesment(45,42), [42,45]);
  });

  it("it should return [8,3]", function() {
    assert.deepEqual(assesment(3,8), [8,3]);
  });

  it("it should return [5,8]", function() {
    assert.deepEqual(assesment(8,5), [5,8]);
  });
});