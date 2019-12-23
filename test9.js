var assert = require("assert");
var assesment = require("./9reverse_words");
describe("it should reverse the words", function() {
  it("it should return ' space  white  tailing  a have'", function() {
    assert.deepEqual(assesment('have a tailing white space'),
    ' space  white  tailing  a have');
  });

  it("it should return ' later  this fix'", function() {
    assert.deepEqual(assesment('fix this later'),
    ' later  this fix');
  });

  it("it should return ' sleepy  feel  am  i now'", function() {
    assert.deepEqual(assesment('now i am feel sleepy'),
    ' sleepy  feel  am  i now');
  });

  it("it should return ' good  are you'", function() {
    assert.deepEqual(assesment('you are good'),
    ' good  are you');
  });

  it("it should return true3", function() {
    assert.deepEqual(assesment('how are you'),
    ' you  are how');
  });
});