var assert = require("assert");
var assesment = require("./18countZero");
describe("it should cpunt Zeroes", function() {
  it("it should return 223", function() {
    assert.deepEqual(assesment(2014), 223);
  });

  it("it should return 1111382", function() {
    assert.deepEqual(assesment(10002450), 1111382);
  });

  it("it should return 88904", function() {
    assert.deepEqual(assesment(800150), 88904);
  });

  it("it should return 227800", function() {
    assert.deepEqual(assesment(2050210), 227800);
  });

  it("it should return 223937", function() {
    assert.deepEqual(assesment(2015458), 223937);
  });
});