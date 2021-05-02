function solution(points, queries) {
    let answer = [];
	for(let query of queries) {
		let x1 = query[0], y1 = query[1], radius = query[2];
		let qty = 0;
		for(let point of points) {
			let x2 = point[0], y2 = point[1];
			let distance = Math.sqrt(Math.pow((x2-x1), 2) + Math.pow((y2-y1), 2));
			if(distance <= radius) qty++;
		}
		answer.push(qty);
	}
    return answer;
};

console.log(solution([[1,3],[3,3],[5,3],[2,2]], [[2,3,1],[4,3,1],[1,1,2]])); //[3,2,2]
console.log(solution([[1,1],[2,2],[3,3],[4,4],[5,5]], [[1,2,2],[2,2,2],[4,3,2],[4,3,3]])); //[2,3,2,4]