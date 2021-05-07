let memo = {0:1, 1:1};
function solution(n) {
    if(memo[n]) return memo[n];
    
    memo[n-1] = solution(n-1);
    memo[n-2] = solution(n-2);
    
    return memo[n-1]+memo[n-2];
};
console.log(solution(45));

/*
0 steps = 1
1 steps = 1
2 steps = 2
3 steps = 2 steps + 1 steps
*/