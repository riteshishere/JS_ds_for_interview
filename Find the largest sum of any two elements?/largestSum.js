
function largestSum(arr){
  
    var biggest = arr[0], 
        second = arr[1], 
        len = arr.length, 
        i = 2;
  
    if (len<2) return null;
    
    if (biggest<second){
      biggest = arr[1];
      second = arr[0];
    } 
    
    for(; i<len; i++){
  
     if(arr[i] > biggest){
        second = biggest;
        biggest = arr[i];
      }
     else if (arr[i]>second){
        second = arr[i];
     }
      
   }
   return biggest + second;
  }

console.log(largestSum([1,5,8,4,3,9]));
17
console.log(largestSum([21,53,64,87,51]));
151
console.log(largestSum([45,12,54,86,98,41,25]));
184
console.log(largestSum([2,1,45,78,15,94]));
172
console.log(largestSum([12,45,15,42,7]));
87