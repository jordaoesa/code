function solution(s, t) {
	if(!s || !t) return '';

	let left = 0, right = s.length-1, minLength = s.length;
	let map = new Map();
	for(let char of t) {
		if(!map.has(char)) map.set(char, 0);
		map.set(char, map.get(char)+1);
	}
	let count = map.size;
	// console.log(`count:${count}`)

	let i = 0, j = 0, found = false;
	while(j < s.length) {
		let rightChar = s[j++];
		if(map.has(rightChar)) {
			map.set(rightChar, map.get(rightChar)-1);
			if(map.get(rightChar) === 0) count--;
		}
		
		// console.log(`i:${i}|j:${j}|left:${left}|right:${right}|min:${minLength}|count:${count}`)
		if(count > 0) continue;
		
		while(count === 0) {
			let leftChar = s[i++];
			if(map.has(leftChar)) {
				map.set(leftChar, map.get(leftChar)+1);
				if(map.get(leftChar) > 0) count++;
			}
			// console.log(`-i:${i}|j:${j}|left:${left}|right:${right}|min:${minLength}|count:${count}`)
		}

		
		if((j-i) < minLength) {
			minLength = j-i;
			left = i;
			right = j;
			found = true;
		}
		// console.log(`--i:${i}|j:${j}|left:${left}|right:${right}|min:${minLength}`)
	}

	return found ? s.substring(left-1, right) : '';
}

console.log(solution('ADOBECODEBANC', 'ACB'));
console.log(solution('a', 'a'));
console.log(solution('aa', 'aa'));
console.log(solution('caabc', 'b'));