// Write a JavaScript program to find the number of even digits in a given integer.
function sum_even_digit(num) {
    let ctr = 0;
    while (num) {
      ctr += num % 2 === 0;
      num = Math.floor(num / 10);
    }
    return ctr;
}
/*
console.log(sum_even_digit(123))
1
console.log(sum_even_digit(10280))
4
console.log(sum_even_digit(8754))
2
console.log(sum_even_digit(4521))
2
console.log(sum_even_digit(895674))
3
*/