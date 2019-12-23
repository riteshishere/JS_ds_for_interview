var assert = require("assert");
var assesment = require("./12find_unique_char");
describe("it should return unique character", function() {
  it("it should return 'barn'", function() {
    assert.deepEqual(assesment('baraban'),
    'barn');
  });

  it("it should return 'you arenicd'", function() {
    assert.deepEqual(assesment('you are a nice dude'),
    'you arenicd');
  });

  it("it should return evrything wlbf')", function() {
    assert.deepEqual(assesment('everything will be fine'),
    'evrything wlbf');
  });

  it("it should return 'you mstbeag'", function() {
    assert.deepEqual(assesment('you must be a guy'),
    'you mstbeag');
  });

  it("it should return 'her itsu'", function() {
    assert.deepEqual(assesment('here it is the truth'),
    'her itsu');
  });
});