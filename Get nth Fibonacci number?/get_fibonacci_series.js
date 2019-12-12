function fibonacci(n){
    var fibo = [0, 1];
    
    if (n <= 2) return 1;
  
    for (var i = 2; i <=n; i++ ){
     fibo[i] = fibo[i-1]+fibo[i-2];
    }
  
   return fibo[n];
  }
/*
console.log(fibonacci(4));
3
console.log(fibonacci(5));
5
console.log(fibonacci(7));
13
console.log(fibonacci(6));
8
console.log(fibonacci(10));
55
*/