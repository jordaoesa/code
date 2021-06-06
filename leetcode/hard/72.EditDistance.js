function solution(word1, word2) {
    let memo = [];
    for(let i = 0; i <= word1.length; i++) memo[i] = Array(word2.length + 1).fill(0);
    for(let i = 0; i <= word1.length; i++) memo[i][0] = i;
    for(let j = 0; j <= word2.length; j++) memo[0][j] = j;

    for(let i = 1; i <= word1.length; i++) {
        for(let j = 1; j <= word2.length; j++) {
            if(word1[i-1] === word2[j-1]) memo[i][j] = memo[i-1][j-1];
            else memo[i][j] = 1 + Math.min(memo[i-1][j-1], memo[i-1][j], memo[i][j-1]);
        }
    }

    return memo[memo.length-1][memo[memo.length-1].length-1];
};

console.log(solution('horse','ros'));
console.log(solution('intention','execution'));