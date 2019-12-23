var assert = require("assert");
var assesment = require("./19subStringFinder");
describe("it should find substring", function() {
  it("it should return true1", function() {
    assert.deepEqual(assesment("abbcdabbbbbck", "ab"), true);
  });

  it("it should return true", function() {
    assert.deepEqual(assesment('abbcdabbbbbck', 'bck'), true);
  });

  it("it should return false", function() {
    assert.deepEqual(assesment('abbcdabbbbbck', 'adb'), false);
  });

  it("it should return false", function() {
    assert.deepEqual(assesment('abaaabcbabc', 'cbc'), false);
  });

  it("it should return true3", function() {
    assert.deepEqual(assesment('ababababbbbbabbbbadk', 'adk'), true);
  });
});