// Write a JavaScript program to check whether it is possible to rearrange characters of a given string in such way,
// that it will become equal to another given string
function rearrangement_characters(str1, str2) {

    var first_set = str1.split(''),
        second_set = str2.split(''),
        result = true;
  
    first_set.sort();
    second_set.sort();
  
    for (var i = 0; i < Math.max(first_set.length, second_set.length); i++) {
      if (first_set[i] !== second_set[i]) {
        result = false;
      }
    }
  
    return result;
  }
/*
console.log(rearrangement_characters('xyz','zyx'))
true
console.log(rearrangement_characters('xyz','zyp'))
false
console.log(rearrangement_characters('ritesh','terihs'))
true    
console.log(rearrangement_characters('mistake','mikaer'))
false
console.log(rearrangement_characters('logrithm','thmilogr'))
true
*/