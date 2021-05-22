function solution(s, ranges) {
    let result = [];
    for(let i = 0; i < ranges.length; i++){
        let range = ranges[i];
        
        let pipes = 0;
        let stars = 0;
        let count = 0;
        for(let j = range[0]; j <= range[range.length-1]; j++) {
            // console.log(s[j])
            if(s[j] === '|') {
                pipes++;
                if(pipes === 2) {
                    count += stars;
                    pipes = 1;
                }
                stars = 0;
            }
            if(s[j] === '*') stars++;
            
        }
        result.push(count);
    }
    return result;
}

console.log(solution('|**|*|*', [[0, 4], [1, 6]]));
console.log(solution('*|*|', [[1, 3]]));
console.log(solution('*|*|*****|*|**', [[1,3], [2,12]]))
console.log(solution('|**|*|*', [[0,4], [0,6]]))