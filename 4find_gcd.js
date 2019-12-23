function greatestCommonDivisor(a, b){
    var divisor = 2, 
        greatestDivisor = 1;
  
    if (a < 2 || b < 2)
       return 1;
    
    while(a >= divisor && b >= divisor){
     if(a %divisor == 0 && b% divisor ==0){
        greatestDivisor = divisor;      
      }
     divisor++;
    }
    return greatestDivisor;
  }
  module.exports = greatestCommonDivisor;
  /*
  console.log(greatestCommonDivisor(14,21));
  7
  console.log(greatestCommonDivisor(69,169));
  1
  console.log(greatestCommonDivisor(97,21));
  1
  console.log(greatestCommonDivisor(19,24));
  1
  console.log(greatestCommonDivisor(14,124));
  2
  */