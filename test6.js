var assert = require("assert");
var assesment = require("./6merge_two_sorted_array");
describe("it should merge sorted arrays", function() {
  it("it should return [ 1, 2, 2, 5, 5, 6, 7, 9 ]", function() {
    assert.deepEqual(assesment([1,2,5,7],[2,5,6,9]),
    [ 1, 2, 2, 5, 5, 6, 7, 9 ]);
  });

  it("it should return [1, 2, 2,  3,5, 6, 9, 29 ]", function() {
    assert.deepEqual(assesment([2,5,6,9], [1,2,3,29]),
    [1, 2, 2,  3,5, 6, 9, 29 ]);
  });

  it("it should return [ 1, 15, 26, 45, 48, 65, 84 ]", function() {
    assert.deepEqual(assesment([15,26,45,48],[1,65,84]),
    [ 1, 15, 26, 45, 48, 65, 84 ]);
  });

  it("it should return [ 1,  2, 18, 25, 39, 42, 58, 94, 97 ]", function() {
    assert.deepEqual(assesment([1,39,42,58,97],[2,18,25,94]),
    [ 1,  2, 18, 25, 39, 42, 58, 94, 97 ]);
  });

  it("it should return [ 1,  1,  2,  8, 12, 32, 49, 54, 87, 95 ]", function() {
    assert.deepEqual(assesment([1,2,49,87,95],[1,8,12,32,54]),
    [ 1,  1,  2,  8, 12, 32, 49, 54, 87, 95 ]);
  });
});