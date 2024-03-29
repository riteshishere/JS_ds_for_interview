function permutations(str){
    var arr = str.split(''),
        len = arr.length, 
        perms = [],
        rest,
        picked,
        restPerms,
        next;
    
        if (len == 0)
            return [str];
    
        for (var i=0; i<len; i++)
        {
            rest = Object.create(arr);
            picked = rest.splice(i, 1);
    
            restPerms = permutations(rest.join(''));
    
           for (var j=0, jLen = restPerms.length; j< jLen; j++)
           {
               next = picked.concat(restPerms[j]);
               perms.push(next.join(''));
           }
        }
       return perms;
    }
    module.exports = permutations;
/*
console.log(permutations('abc'))
[ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
console.log(permutations('htg'))
[ 'htg', 'hgt', 'thg', 'tgh', 'ght', 'gth' ]
console.log(permutations('ret'))
[ 'ret', 'rte', 'ert', 'etr', 'tre', 'ter' ]
console.log(permutations('gtr'))
[ 'gtr', 'grt', 'tgr', 'trg', 'rgt', 'rtg' ]
console.log(permutations('ju'))
[ 'ju', 'uj' ]
*/