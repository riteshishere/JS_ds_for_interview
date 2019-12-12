// Write a JavaScript program to sort an array of all prime numbers between 1 and a given integer
function sort_prime(num) {

    var prime_num1 = [],
        prime_num2 = [];
    for (var i = 0; i <= num; i++) {
      prime_num2.push(true);
    }
    for (var i = 2; i <= num; i++) {
      if (prime_num2[i]) {
        prime_num1.push(i);
        for (var j = 1; i * j <= num; j++) {
          prime_num2[i * j] = false;
        }
      }
    }
  
    return prime_num1;
  }
/*
console.log(sort_prime(5))
[ 2, 3, 5 ]
console.log(sort_prime(11))
[ 2, 3, 5, 7, 11 ]
console.log(sort_prime(19))
[ 2,  3,  5,  7, 11, 13, 17, 19 ]
console.log(sort_prime(19))
[ 2,  3,  5,  7, 11, 13, 17, 19 ]
console.log(sort_prime(19))
[ 2,  3,  5,  7, 11, 13, 17, 19 ]
*/