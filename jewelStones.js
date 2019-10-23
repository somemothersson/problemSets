

var numJewelsInStones = function(J, S) {
    console.log(J,S)
    var jarr = J.split('')
    var sarr = S.split('')
    let occurences = sarr.filter(value => jarr.includes(value)).length
    console.log(occurences)
};

numJewelsInStones("aA","aAAbbbb")