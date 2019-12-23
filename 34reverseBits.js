// Write a JavaScript program to reverse the order of the bits in a given integer.
function reverse_bits(n) {
    return parseInt(n.toString(2).split("").reverse().join(""), 2);
}
module.exports = reverse_bits;
/*
console.log(reverse_bits(56))
7
console.log(reverse_bits(234))
87
console.log(reverse_bits(54))
27
console.log(reverse_bits(44))
13
console.log(reverse_bits(40))
5
*/