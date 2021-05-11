function solution(nums) {
	let map = {};
	for(let i = 0; i < nums.length; i++) map[nums[i]*nums[i]] = 1;
	for(let i = 0; i < nums.length; i++) {
		for(let j = i+1; j < nums.length; j++) {
			let idx = (nums[i]*nums[i]) + (nums[j]*nums[j]);
			if(map[idx]) return true;
		}
	}
	return false;
}

console.log(solution([3,5,12,5,13]));
console.log(solution([3,7, 2,24,12,1,5,6,4,9,13,10,25]))