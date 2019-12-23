var assert = require("assert");
var assesment = require("./29sort_prime");
describe("it should sort the prime number", function() {
  it("it should return [ 2, 3, 5 ]", function() {
    assert.deepEqual(assesment(5), [ 2, 3, 5 ]);
  });

  it("it should return [ 2, 3, 5, 7, 11 ]", function() {
    assert.deepEqual(assesment(11), [ 2, 3, 5, 7, 11 ]);
  });

  it("it should return [ 2,  3,  5,  7, 11, 13, 17, 19 ]", function() {
    assert.deepEqual(assesment(19), [ 2,  3,  5,  7, 11, 13, 17, 19 ]);
  });

  it("it should return [ 2,  3,  5,  7 ]", function() {
    assert.deepEqual(assesment(7), [ 2,  3,  5,  7 ]);
  });

  it("it should return [ 2,  3,  5,  7, 11 ]", function() {
    assert.deepEqual(assesment(11), [ 2,  3,  5,  7, 11 ]);
  });
});