
function sumFinder(arr, sum){
    var len = arr.length;
    
    for(var i =0; i<len-1; i++){  
       for(var j = i+1;j<len; j++){
          if (arr[i] + arr[j] == sum)
              return true;
       }
    }
    
    return false;
  }
  module.exports = sumFinder;
/*
console.log(sumFinder([6,4,3,2,1,7], 9));
true
console.log(sumFinder([6,4,3,2,1,7], 2));
false
console.log(sumFinder([6,4,3,2,8,2,1,7], 10));
true
console.log(sumFinder([6,4,3,2,1,7,5,1,3], 19));
false
console.log(sumFinder([6,41,5,2,3,2,1,7], 15));
false
*/