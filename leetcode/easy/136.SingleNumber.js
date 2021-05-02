function solution(nums) {
    let map = new Map();
    for(let i = 0; i < nums.length; i++) {
        if(!map.has(nums[i])) map.set(nums[i], 0);
        map.set(nums[i], map.get(nums[i])+1);
    }
    for(let i = 0; i < nums.length; i++) {
        if(map.get(nums[i]) === 1) return nums[i];
    }
    return 0;
};

console.log(solution([2,2,1]));
console.log(solution([4,1,2,1,2]));
console.log(solution([1]));