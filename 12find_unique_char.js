function find_unique_characters( string ){
    var unique='';
    for(var i=0; i<string.length; i++){
        if(unique.indexOf(string[i])==-1){
            unique += string[i];
        }
    }
    return unique;
}
module.exports = find_unique_characters;
/*
console.log(find_unique_characters('baraban'));
'barn'
console.log(find_unique_characters('you are a nice dude'))
'you arenicd'
console.log(find_unique_characters('everything will be fine'))
'evrything wlbf'
console.log(find_unique_characters('you must be a guy'))
'you mstbeag'
console.log(find_unique_characters('here it is the truth'))
'her itsu'
*/