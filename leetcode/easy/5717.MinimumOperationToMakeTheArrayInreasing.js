function solution(nums) {
    let ops = 0;
    if(!nums || nums.length === 1) return ops;

    for(let i = 1; i < nums.length; i++) {
        if(nums[i] > nums[i-1]) continue;

        ops += ((nums[i-1]-nums[i])+1);
        nums[i] = nums[i-1]+1;
    }
    
    return ops;
};

console.log(solution([1,1,1]));
console.log(solution([1,5,2,4,1]));
console.log(solution([8]));