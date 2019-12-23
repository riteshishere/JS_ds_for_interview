var assert = require("assert");
var assesment = require("./5removeDuplicate");
describe("it should remove duplicates", function() {
  it("it should return [ 1, 3, 5, 6, 7, 8 ]", function() {
    assert.deepEqual(assesment([1,3,3,3,1,5,6,7,8,1]), [ 1, 3, 5, 6, 7, 8 ]);
  });

  it("it should return [ 1, 8, 7, 5, 4, 2, 6, 9 ]", function() {
    assert.deepEqual(assesment([1,8,7,5,4,8,7,2,6,9]), [ 1, 8, 7, 5, 4, 2, 6, 9 ]);
  });

  it("it should return [ 1, 2, 7, 4, 5, 9, 3 ]", function() {
    assert.deepEqual(assesment([1,2,7,4,2,5,9,3,1,5]), [ 1, 2, 7, 4, 5, 9, 3 ]);
  });

  it("it should return [ 1, 5, 4, 2, 9, 8, 3, 6 ]", function() {
    assert.deepEqual(assesment([1,5,4,1,2,9,8,5,3,6]), [ 1, 5, 4, 2, 9, 8, 3, 6 ]);
  });

  it("it should return [ 1, 5, 4, 8, 7, 2, 9 ]", function() {
    assert.deepEqual(assesment([1,5,4,8,7,2,1,9,5,8]), [ 1, 5, 4, 8, 7, 2, 9 ]);
  });
});