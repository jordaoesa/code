function solution(nums) {
    let map = {};
    for(let i = 0; i < nums.length; i++) {
        if(!map[nums[i]]) map[nums[i]] = 0;
        map[nums[i]]+=1;
    }
    for(let i = 0; i < nums.length; i++) {
        if(map[nums[i]] > 1) return nums[i];
    }
    return 0;
};

console.log(solution([1,3,4,2,2]));
console.log(solution([3,1,3,4,2]));
console.log(solution([1,1]));
console.log(solution([1,1,2]));