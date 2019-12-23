function missingNumber(arr){
    var n = arr.length+1, 
    sum = 0,
    expectedSum = n* (n+1)/2;
    
    for(var i = 0, len = arr.length; i < len; i++){
      sum += arr[i];
    }
    
    return expectedSum - sum;
  }
  module.exports = missingNumber;
/*
console.log(missingNumber([1,3,4,5]));
2
console.log(missingNumber([2,3,4,5,6,7]));
1
console.log(missingNumber([1,2,3,4,5,7,8,9]));
6
console.log(missingNumber([1,2,3,5,6,7,8,9]));
4
console.log(missingNumber([1,2,3,5,6]))
4
*/