var assert = require("assert");
var assesment = require("./2find_all_prime_factor_of_a_number");
describe("it should return prime factors", function() {
  it("it should return [ 3, 23 ]", function() {
    assert.deepEqual(assesment(69), [ 3, 23 ]);
  });

  it("it should return [ 2, 5, 7 ]", function() {
    assert.deepEqual(assesment(70), [ 2, 5, 7 ]);
  });

  it("it should return [ 5, 17 ]", function() {
    assert.deepEqual(assesment(85), [ 5, 17 ]);
  });

  it("it should return [ 2, 7, 11 ]", function() {
    assert.deepEqual(assesment(154), [ 2, 7, 11 ]);
  });

  it("it should return [ 2, 7, 7 ]", function() {
    assert.deepEqual(assesment(98), [ 2, 7, 7 ]);
  });
});