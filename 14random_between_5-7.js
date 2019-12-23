function rand5(){
    return 1 + Math.random() * 4;
 }
 
 function rand7(){
   return 5 + rand5() / 5 * 2;
 }
module.exports = rand7;

/*
console.log(rand7());
6.068938449673081
console.log(rand7());
5.739524630517787
console.log(rand7());
6.64518539491019
console.log(rand7());
6.14178438766143
console.log(rand7());
6.14178438766143
*/