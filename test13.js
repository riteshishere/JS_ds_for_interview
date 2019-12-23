var assert = require("assert");
var assesment = require("./13is_palindrome");
describe("it should check pallindrome", function() {
  it("it should return true1", function() {
    assert.deepEqual(assesment('madam'), true);
  });

  it("it should return false", function() {
    assert.deepEqual(assesment('toyota'), false);
  });

  it("it should return true2", function() {
    assert.deepEqual(assesment('jahaj'), true);
  });

  it("it should return false", function() {
    assert.deepEqual(assesment('arab'), false);
  });

  it("it should return false", function() {
    assert.deepEqual(assesment('india'), false);
  });
});