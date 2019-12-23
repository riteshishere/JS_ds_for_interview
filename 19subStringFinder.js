function subStringFinder(str,substr){
    if(str.indexOf(substr)>=0){
        return true
    }
    return false;
}
module.exports = subStringFinder;
/*
console.log(subStringFinder("abbcdabbbbbck", "ab"));
true
console.log(subStringFinder('abbcdabbbbbck', 'bck'));
true
console.log(subStringFinder('abbcdabbbbbck', 'adb'));
false
console.log(subStringFinder('abaaabcbabc', 'cbc'));
false
console.log(subStringFinder('ababababbbbbabbbbadk', 'adk'));
true
*/