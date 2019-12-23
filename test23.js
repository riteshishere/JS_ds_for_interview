var assert = require("assert");
var assesment = require("./23firstHalf");
describe("it should extract the first half of a string of even length", function() {
  it("it should return 'pyt'", function() {
    assert.deepEqual(assesment("Python"),
    'Pyt');
  });

  it("it should return 'ja'", function() {
    assert.deepEqual(assesment("java"),
    'ja');
  });

  it("it should return 'php'", function() {
    assert.deepEqual(assesment("php"),
    'php');
  });

  it("it should return 'javas'", function() {
    assert.deepEqual(assesment("javascript"),
    'javas');
  });

  it("it should return 'espon'", function() {
    assert.deepEqual(assesment("espon"),
    'espon');
  });
});