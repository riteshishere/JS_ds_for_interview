function mergeSortedArray(a, b){
    var merged = [], 
        aElm = a[0],
        bElm = b[0],
        i = 1,
        j = 1;
    
    if(a.length ==0)
      return b;
    if(b.length ==0)
      return a;
    while(aElm || bElm){
     if((aElm && !bElm) || aElm < bElm){
       merged.push(aElm);
       aElm = a[i++];
     }   
     else {
       merged.push(bElm);
       bElm = b[j++];
     }
    }
    return merged;
  }
/*
console.log(mergeSortedArray([1,2,5,7],[2,5,6,9]));
[ 1, 2, 2, 5, 5, 6, 7, 9 ]
console.log(mergeSortedArray([2,5,6,9], [1,2,3,29]));
[1, 2, 2,  3,5, 6, 9, 29 ]
console.log(mergeSortedArray([15,26,45,48],[1,65,84]));
[ 1, 15, 26, 45, 48, 65, 84 ]
console.log(mergeSortedArray([1,39,42,58,97],[2,18,25,94]));
[ 1,  2, 18, 25, 39, 42, 58, 94, 97 ]
console.log(mergeSortedArray([1,2,49,87,95],[1,8,12,32,54]));
[ 1,  1,  2,  8, 12, 32, 49, 54, 87, 95 ]
*/