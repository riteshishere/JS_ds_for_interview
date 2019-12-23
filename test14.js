var assert = require("assert");
var assesment = require("./14random_between_5-7");

const validator = () => {
    if(assesment()>5 && assesment()<7)
        return true;
    else
        return false;
}

describe("it should check whether a number is in between 5 & 7", function(){
    it("it should return true", function(){
        assert.deepEqual(validator(), true);
    });

    it("It should return true", function(){
        assert.deepEqual(validator(), true);
    });
})