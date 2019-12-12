function isPalindrome(str){
    var i, len = str.length;
    for(i =0; i<len/2; i++){
      if (str[i]!== str[len -1 -i])
         return false;
    }
    return true;
  }
/*
console.log(isPalindrome('madam'));
true
console.log(isPalindrome('toyota'));
false
console.log(isPalindrome('jahaj'));
true
console.log(isPalindrome('arab'));
false
console.log(isPalindrome('india'));
false
*/