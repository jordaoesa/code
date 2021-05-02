function solution(nums, target) {
    let pos = [];
    let found = false;
    
    for(let i = 0; i < nums.length; i++) {
        while(nums[i] === target) {
            pos.push(i++);
            found = true;
        }
        if(found) break;
    }
    
    return pos.length > 0 ? [pos[0], pos[pos.length-1]] : [-1, -1];
};

console.log(solution([5,7,7,8,8,10], 8));
console.log(solution([5,7,7,8,8,10], 6));
console.log(solution([], 0));