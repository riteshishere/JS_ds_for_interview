function reverseInPlace(str){
    return str.split(' ').reverse().join(' ').split('').reverse().join('');
  }
  module.exports = reverseInPlace;
/*
console.log(reverseInPlace('you are a nice dude'));
uoy era a ecin edud
console.log(reverseInPlace('hey its me'));
yeh sti em
console.log(reverseInPlace('everything will be fine'));
gnihtyreve lliw eb enif
console.log(reverseInPlace('you must be a guy'));
uoy tsum eb a yug
console.log(reverseInPlace('here it is the truth'));
ereh ti si eht hturt
*/