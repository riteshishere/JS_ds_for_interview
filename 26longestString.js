// Write a JavaScript to find the longest string from an given array of strings.
function longest_string(str_ara) {
    var max = str_ara[0].length;
    str_ara.map(v => max = Math.max(max, v.length));
    result = str_ara.filter(v => v.length == max);
    return result;
  }
  module.exports = longest_string;
/*
console.log(longest_string(['a', 'aa', 'aaa', 'aaaaa','aaaa']))
[ 'aaaaa' ]
console.log(longest_string(['b', 'sdadsxZ', 'weasdxasdsx', 'wwdsaa']))
[ 'weasdxasdsx' ]
console.log(longest_string(['dc', 'fgtrwe', 'fg', 'dfss']))
[ 'fgtrwe' ]
console.log(longest_string(['fd', 'dfsc', 'fd', 'ploikrmkdk']))
[ 'ploikrmkdk' ]
console.log(longest_string(['dfgtredscfd', 'gfrted', 'gftrds']))
[ 'dfgtredscfd' ]
*/