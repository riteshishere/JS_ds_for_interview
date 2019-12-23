var assert = require("assert");
var assesment = require("./30int_sum");
describe("it should calculate sum", function() {
  it("it should return 15", function() {
    assert.deepEqual(assesment(8), 15);
  });

  it("it should return 16", function() {
    assert.deepEqual(assesment(9), 16);
  });

  it("it should return 49", function() {
    assert.deepEqual(assesment(26), 49);
  });

  it("it should return 32", function() {
    assert.deepEqual(assesment(17), 32);
  });

  it("it should return 22", function() {
    assert.deepEqual(assesment(12), 22);
  });
});