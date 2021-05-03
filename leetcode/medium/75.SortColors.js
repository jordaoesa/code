function solution(nums) {
	let red = 0, white = 0, blue = 0;
    for(let n of nums) {
        if(n === 0) red++;
        else if(n === 1) white++;
        else if(n === 2) blue++;
    }
    for(let i = 0; i < nums.length; i++) {
        if(red > 0) {
            nums[i] = 0;
            red--;
        } else if(red === 0 && white > 0) {
            nums[i] = 1;
            white--;
        } else if(red === 0 && white === 0 && blue > 0) {
            nums[i] = 2;
            blue--;
        }
    }

    return nums;
}

console.log(solution([2,0,2,1,1,0])); //[0,0,1,1,2,2]
console.log(solution([2,0,1])); //[0,1,2]
console.log(solution([0])); //[0]
console.log(solution([1])); //[1]