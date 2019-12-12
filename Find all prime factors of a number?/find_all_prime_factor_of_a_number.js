function primeFactors(n){
    var factors = [], 
        divisor = 2;
    
    while(n>2){
      if(n % divisor == 0){
         factors.push(divisor); 
         n= n/ divisor;
      }
      else{
        divisor++;
      }     
    }
    return factors;
  }
/*
console.log(primeFactors(69));
[ 3, 23 ]
console.log(primeFactors(70));
[ 2, 5, 7 ]
console.log(primeFactors(85));
[ 5, 17 ]
console.log(primeFactors(154));
[ 2, 7, 11 ]
console.log(primeFactors(98));
[ 2, 7, 7 ]
*/