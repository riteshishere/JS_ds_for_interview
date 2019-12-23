var assert = require("assert");
var assesment = require("./24end_script");
describe("it should test if a string end with 'Script'", function() {
  it("it should return true1", function() {
    assert.deepEqual(assesment('JavaScript'), true);
  });

  it("it should return false", function() {
    assert.deepEqual(assesment('Java Scripts'), false);
  });

  it("it should return true2", function() {
    assert.deepEqual(assesment('Java Script'), true);
  });

  it("it should return false", function() {
    assert.deepEqual(assesment('JavaScripts'), false);
  });

  it("it should return false", function() {
    assert.deepEqual(assesment('JavaScript script'), false);
  });
});