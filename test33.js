var assert = require("assert");
var assesment = require("./33logical_nor");
describe("it should perform logically NOR", function() {
  it("it should return true1", function() {
    assert.deepEqual(assesment(false, false), true);
  });

  it("it should return false", function() {
    assert.deepEqual(assesment(true, false), false);
  });

  it("it should return false", function() {
    assert.deepEqual(assesment(true, true), false);
  });
});