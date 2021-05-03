function solution(nums, target) {
	let first = 0, second = 0, remaining = 0;
    for(let i = 0; i < nums.length; i++) {
        remaining = target - nums[i];
        first = i;
        for(let j = i+1; j < nums.length; j++) {
            if(nums[j] === remaining) {
                second = j;
                break
            }
        }
        if(second !== 0) break;
    }
    return [first, second];
}

console.log(solution([2,7,11,5], 9));
console.log(solution([3,2,4], 6));
console.log(solution([3,3], 6));