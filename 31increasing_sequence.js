// Write a JavaScript program to check if a given integer has an increasing digits sequence.
function increasing_Sequence(num) {

    var arr_num = ('' + num).split('');
  
    for (var i = 0; i < arr_num.length - 1; i++) {
      if (parseInt(arr_num[i]) >= parseInt(arr_num[i + 1]))
        return false;
      }
    return true;
}
module.exports = increasing_Sequence;
/*
console.log(increasing_Sequence(123));
true
console.log(increasing_Sequence(1223));
false
console.log(increasing_Sequence(45677));
false
console.log(increasing_Sequence(12587));
false
console.log(increasing_Sequence(25849));
false
*/