var assert = require("assert");
var assesment = require("./25twoString");
describe("it should create a new string using the first and last n characters from a given sting.", function() {
  it("it should return 'japt'", function() {
    assert.deepEqual(assesment('javascript', 2),
    'japt');
  });

  it("it should return 'javipt'", function() {
    assert.deepEqual(assesment('javascript', 3),
    'javipt');
  });

  it("it should return 'javaript'", function() {
    assert.deepEqual(assesment('javascript', 4),
    'javaript');
  });

  it("it should return 'javascript'", function() {
    assert.deepEqual(assesment('javascript', 5),
    'javascript');
  });

  it("it should return 'java'", function() {
    assert.deepEqual(assesment('javascriptjava', 2),
    'java');
  });
});