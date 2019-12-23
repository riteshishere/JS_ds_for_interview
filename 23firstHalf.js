// Write a JavaScript program to extract the first half of a string of even length.
function first_half (str) {
    if (str.length % 2 == 0) {
      return str.slice(0, str.length / 2);
    }
    return str;
  }
  module.exports = first_half;
/*
console.log(first_half("Python"));
Pyt
console.log(first_half("java"));
ja
console.log(first_half("php"));
php
console.log(first_half("javascript"));
javas
console.log(first_half("espon"));
espon
*/