const findVowels = str => {
    let count = 0
    const vowels = ['a', 'e', 'i', 'o', 'u']
    for(let char of str.toLowerCase()) {
      if(vowels.includes(char)) {
        count++
      }
    }
    return count
  }
/*
console.log(findVowels('canada'));
3
console.log(findVowels('ritesh'));
2
console.log(findVowels('sdfgh'));
0
console.log(findVowels('lowercase'));
4
console.log(findVowels('aswedrte'));
3
*/