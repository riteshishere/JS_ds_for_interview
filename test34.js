var assert = require("assert");
var assesment = require("./34reverseBits");
describe("it should reverse the bits", function() {
  it("it should return 7", function() {
    assert.deepEqual(assesment(56), 7);
  });

  it("it should return 87", function() {
    assert.deepEqual(assesment(234), 87);
  });

  it("it should return 27", function() {
    assert.deepEqual(assesment(54), 27);
  });

  it("it should return 13", function() {
    assert.deepEqual(assesment(44), 13);
  });

  it("it should return 5", function() {
    assert.deepEqual(assesment(40), 5);
  });
});