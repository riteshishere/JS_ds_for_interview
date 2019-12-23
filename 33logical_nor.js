// Write a JavaScript program to create the value of NOR of two given booleans.
function logical_Nor(a, b) {
    return (!(a || b))
  }
  module.exports = logical_Nor; 
/*
console.log(logical_Nor(true, false));
false
console.log(logical_Nor(false, false));
true
console.log(logical_Nor(true, true));
false
*/