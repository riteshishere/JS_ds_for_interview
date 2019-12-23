// Write a JavaScript program to create a new string using the first and last n characters from a given sting.
function two_string(str, n)
{
first_part = str.substring(0, n);
last_part = str.substring(str.length - n);
return first_part + last_part;
}
module.exports = two_string;
/*
console.log(two_string('javascript', 2))
japt
console.log(two_string('javascript', 3))
javipt
console.log(two_string('javascript', 4))
javaript
console.log(two_string('javascript', 5))
javascript
console.log(two_string('javascriptjava', 2))
java
*/