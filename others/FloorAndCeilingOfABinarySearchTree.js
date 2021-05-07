function solution(root, k) {
	let floor = -1, ceil = -1;
	while(root) {
		if(root.val === k) {
			floor = root.val;
			ceil = root.val;
			return [floor, ceil];
		}
		if(k > root.val) {
			floor = root.val;
			root = root.right;
		} else {
			ceil = root.val;
			root = root.left;
		}
	}
	return [floor, ceil];
}

let leftL = new Node(2);
let rightL = new Node(6);
let leftR = new Node(10);
let rightR = new Node(14);
let left = new Node(4, leftL, rightL);
let right = new Node(12, leftR, rightR);
let root = new Node(8, left, right);

console.log(solution(root, 5));

function Node(val, left, right) {
    this.val = (val===undefined ? 0 : val);
    this.left = (left===undefined ? null : left);
    this.right = (right===undefined ? null : right);
}