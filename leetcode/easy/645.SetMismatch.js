function solution(nums) {
	let map = {};
	for(let i = 1; i <= nums.length; i++) {
	    map[i] = 0;
	}
	for(let i = 0; i < nums.length; i++) {
	    map[nums[i]]++;
	}
	
	let missing = 0, duplicate = 0;
	for(let key in map) {
	    if(map[key] === 2) duplicate = key;
	    if(map[key] === 0) missing = key;
	}

	return [parseInt(duplicate), parseInt(missing)];
}

console.log(solution([1,2,2,4]));
console.log(solution([1,1]));