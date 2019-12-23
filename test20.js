var assert = require("assert");
var assesment = require("./20permutation");
describe("it should check permutation", function() {
  it("it should return [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]", function() {
    assert.deepEqual(assesment('abc'),
    [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]);
  });

  it("it should return [ 'htg', 'hgt', 'thg', 'tgh', 'ght', 'gth' ]", function() {
    assert.deepEqual(assesment('htg'),
    [ 'htg', 'hgt', 'thg', 'tgh', 'ght', 'gth' ]);
  });

  it("it should return [ 'ret', 'rte', 'ert', 'etr', 'tre', 'ter' ]", function() {
    assert.deepEqual(assesment('ret'),
    [ 'ret', 'rte', 'ert', 'etr', 'tre', 'ter' ]);
  });

  it("it should return [ 'gtr', 'grt', 'tgr', 'trg', 'rgt', 'rtg' ]", function() {
    assert.deepEqual(assesment('gtr'),
    [ 'gtr', 'grt', 'tgr', 'trg', 'rgt', 'rtg' ]);
  });

  it("it should return [ 'ju', 'uj' ]", function() {
    assert.deepEqual(assesment('ju'),
    [ 'ju', 'uj' ]);
  });
});