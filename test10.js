var assert = require("assert");
var assesment = require("./10inplace");
describe("it should reverse words in place", function() {
  it("it should return 'uoy era a ecin edud'", function() {
    assert.deepEqual(assesment('you are a nice dude'),
    'uoy era a ecin edud');
  });

  it("it should return 'yeh sti em'", function() {
    assert.deepEqual(assesment('hey its me'),
    'yeh sti em');
  });

  it("it should return 'gnihtyreve lliw eb enif'", function() {
    assert.deepEqual(assesment('everything will be fine'),
    'gnihtyreve lliw eb enif');
  });

  it("it should return 'uoy tsum eb a yug'", function() {
    assert.deepEqual(assesment('you must be a guy'),
    'uoy tsum eb a yug');
  });

  it("it should return 'ereh ti si eht hturt'", function() {
    assert.deepEqual(assesment('here it is the truth'),
    'ereh ti si eht hturt');
  });
});