var assert = require("assert");
var assesment = require("./26longestString");
describe("it should return longest string", function() {
  it("it should return [ 'aaaaa' ]", function() {
    assert.deepEqual(assesment(['a', 'aa', 'aaa', 'aaaaa','aaaa']),
    [ 'aaaaa' ]);
  });

  it("it should return [ 'weasdxasdsx' ]", function() {
    assert.deepEqual(assesment(['b', 'sdadsxZ', 'weasdxasdsx', 'wwdsaa']),
    [ 'weasdxasdsx' ]);
  });

  it("it should return [ 'fgtrwe' ]", function() {
    assert.deepEqual(assesment(['dc', 'fgtrwe', 'fg', 'dfss']),
    [ 'fgtrwe' ]);
  });

  it("it should return [ 'ploikrmkdk' ]", function() {
    assert.deepEqual(assesment(['fd', 'dfsc', 'fd', 'ploikrmkdk']),
    [ 'ploikrmkdk' ]);
  });

  it("it should return [ 'dfgtredscfd' ]", function() {
    assert.deepEqual(assesment(['dfgtredscfd', 'gfrted', 'gftrds']),
    [ 'dfgtredscfd' ]);
  });
});