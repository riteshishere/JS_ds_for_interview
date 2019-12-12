function firstNonRepeatChar(str){
    var len = str.length,
        char, 
        charCount = {};
    for(var i =0; i<len; i++){
      char = str[i];
      if(charCount[char]){
        charCount[char]++;
      }
      else
        charCount[char] = 1;
    }
    for (var j in charCount){
      if (charCount[j]==1)
         return j;
    }
  }
/*
console.log(firstNonRepeatChar('the quick brown fox jumps then quickly blow air'))
f
console.log(firstNonRepeatChar('you are a nice dude'))
y
console.log(firstNonRepeatChar('everything will be fine'))
v
console.log(firstNonRepeatChar('you must be a guy'))
o
console.log(firstNonRepeatChar('here it is the truth'))
s
*/