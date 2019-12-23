function removeDuplicate(arr){
    var exists ={},
        outArr = [], 
        elm;
  
    for(var i =0; i<arr.length; i++){
      elm = arr[i];
      if(!exists[elm]){
        outArr.push(elm);
        exists[elm] = true;
     }
    }
    return outArr;
  }
  module.exports = removeDuplicate;
  /*
  console.log(removeDuplicate([1,3,3,3,1,5,6,7,8,1]));
  [ 1, 3, 5, 6, 7, 8 ]
  console.log(removeDuplicate([1,8,7,5,4,8,7,2,6,9]));
  [ 1, 8, 7, 5, 4, 2, 6, 9 ]
  console.log(removeDuplicate([1,2,7,4,2,5,9,3,1,5]));
  [ 1, 2, 7, 4, 5, 9, 3 ]
  console.log(removeDuplicate([1,5,4,1,2,9,8,5,3,6]));
  [ 1, 5, 4, 2, 9, 8, 3, 6 ]
  console.log(removeDuplicate([1,5,4,8,7,2,1,9,5,8]));
  [ 1, 5, 4, 8, 7, 2, 9 ]
  console.log(removeDuplicate([1,8,6,5,4,9,8,7,3,7]));
  [ 1, 8, 6, 5, 4, 9, 7, 3 ]
  */