var assert = require("assert");
var assesment = require("./17largestSum");
describe("it should give lagest sum", function() {
  it("it should return 17", function() {
    assert.deepEqual(assesment([1,5,8,4,3,9]), 17);
  });

  it("it should return 151", function() {
    assert.deepEqual(assesment([21,53,64,87,51]), 151);
  });

  it("it should return 184", function() {
    assert.deepEqual(assesment([45,12,54,86,98,41,25]), 184);
  });

  it("it should return 172", function() {
    assert.deepEqual(assesment([2,1,45,78,15,94]), 172);
  });

  it("it should return 87", function() {
    assert.deepEqual(assesment([12,45,15,42,7]), 87);
  });
});