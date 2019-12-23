// Write a JavaScript program to calculate the sum n + n/2 + n/4 + n/8 + .... 
// where n is a positive integer and all divisions are integer.
function int_sum(num) {
    var s_sum = 0;
    while (num > 0) {
        s_sum += num;
        num = Math.floor(num / 2);
    }
    return s_sum;
}
module.exports = int_sum;
/*
console.log(int_sum(8))
15
console.log(int_sum(9))
16
console.log(int_sum(26))
49
console.log(int_sum(17))
32
console.log(int_sum(12))
22
*/