function reverseWords(str){
    var rev = [], 
        wordLen = 0;
    for(var i = str.length-1; i>=0; i--){
      if(str[i]==' ' || i==0){
        rev.push(str.substr(i,wordLen+1));
        wordLen = 0;
      }
      else
        wordLen++;
    }
    return rev.join(' ');
   }
/*
console.log(reverseWords('have a tailing white space'));
space  white  tailing  a have
console.log(reverseWords('fix this later'));
later  this fix
console.log(reverseWords('now i am feel sleepy'));
sleepy  feel  am  i now
console.log(reverseWords('you are good'));
good  are you
console.log(reverseWords('how are you'));
you  are how
*/