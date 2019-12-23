var assert = require("assert");
var assesment = require("./8reverse_string");
describe("it should reverse the string", function() {
  it("it should return 'edud ecin a era uoy'", function() {
    assert.deepEqual(assesment('you are a nice dude'),
    'edud ecin a era uoy');
  });

  it("it should return 'em sti yeh'", function() {
    assert.deepEqual(assesment('hey its me'),
    'em sti yeh');
  });

  it("it should return 'enif eb lliw gnihtyreve'", function() {
    assert.deepEqual(assesment('everything will be fine'),
    'enif eb lliw gnihtyreve');
  });

  it("it should return 'yug a eb tsum uoy'", function() {
    assert.deepEqual(assesment('you must be a guy'),
    'yug a eb tsum uoy');
  });

  it("it should return 'hturt eht si ti ereh'", function() {
    assert.deepEqual(assesment('here it is the truth'),
    'hturt eht si ti ereh');
  });
});