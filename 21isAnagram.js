function isAnagram (first, second){
    var a= first.toLowerCase();
    var b= second.toLowerCase();

    a= a.split('').sort().join('');
    b= b.split('').sort().join('');

    return (a === b);
}
module.exports = isAnagram;
/*
console.log(isAnagram('monk','konm'));
true
console.log(isAnagram('bbc','cbb'));
true
console.log(isAnagram('dell','ledl'));
true
console.log(isAnagram('lenovo','ovonel'));
true
console.log(isAnagram('hpstate','shaptee'));
false
*/