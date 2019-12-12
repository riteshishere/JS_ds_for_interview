function countZero(n){
    var count = 0;
    while(n>0){
     count += Math.floor(n/10);
     n = n/10;
    }
    return count;
  }
/*
console.log(countZero(2014));
223
console.log(countZero(10002450));
1111382
console.log(countZero(800150));
88904
console.log(countZero(2050210));
227800
console.log(countZero(2015458));
223937
*/