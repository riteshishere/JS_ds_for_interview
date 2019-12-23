function isPrime(n)
{
  var divisor = 3, 
      limit = Math.sqrt(n);
  
  //check simple cases
  if (n == 2 || n == 3)
     return true;
  if (n % 2 == 0)
     return false;

  while (divisor <= limit)
  {
    if (n % divisor == 0)
      return false;
    else
      divisor += 2;
  }
  return true;
}
console.log(isPrime(854))
module.exports = isPrime;

/*
>isPrime(137)
= true
>isPrime(237)
= false
>isPrime(239)
= true
>isPrime(385)
= false
>isPrime(854)
= true
*/