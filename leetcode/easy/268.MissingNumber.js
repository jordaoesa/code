function solution(nums) {
    let missing = 0;
    for(let i = 0; i <= nums.length; i++) missing += i;
    for(let i = 0; i < nums.length; i++) missing -= nums[i];
    return missing;
};

console.log(solution([3,0,1]));
console.log(solution([0,1]));
console.log(solution([9,6,4,2,3,5,7,0,1]));
console.log(solution([0]));