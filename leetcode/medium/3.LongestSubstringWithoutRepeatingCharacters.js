function solution(s) {
    let map = new Map();
    for(let c of s) {
        if(!map.has(c)) map.set(c, 1);
    }
    
    let max = 0, i = 0, j = 0, hasDuplicates = false;
    while(j < s.length) {
        let rightChar = s[j++];
        map.set(rightChar, map.get(rightChar)-1);
        
        if(map.get(rightChar) < 0) hasDuplicates = true;
        else if((j-i) > max) max = (j-i);
        
        if(!hasDuplicates) continue;
        
        while(hasDuplicates) {
            let leftChar = s[i++];
            map.set(leftChar, map.get(leftChar)+1);
            if(map.get(leftChar) === 0) hasDuplicates = false;
        }
        
    }
    
    return max;
};

console.log(solution("abcabcbb"));
console.log(solution("bbbbb"));
console.log(solution("pwwkew"));
console.log(solution(""));