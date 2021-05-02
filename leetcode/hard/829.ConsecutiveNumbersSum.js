function solution(n) {
	let sum = 0, i = 1;
	while(n > 0) {
		n -= i;
		if(n%i === 0) sum++;
		i++;
	}
	return sum;
}

console.log(solution(5));
console.log(solution(9));
console.log(solution(15));
