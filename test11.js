var assert = require("assert");
var assesment = require("./11first_non-repeating_char");
describe("it should return first non-repeating character", function() {
  it("it should return 'f'", function() {
    assert.deepEqual(assesment('the quick brown fox jumps then quickly blow air'),'f');
  });

  it("it should return 'y'", function() {
    assert.deepEqual(assesment('you are a nice dude'), 'y');
  });

  it("it should return 'v'", function() {
    assert.deepEqual(assesment('everything will be fine'),'v');
  });

  it("it should return 'o'", function() {
    assert.deepEqual(assesment('you must be a guy'), 'o');
  });

  it("it should return 's'", function() {
    assert.deepEqual(assesment('here it is the truth'), 's');
  });
});