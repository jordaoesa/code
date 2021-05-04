function solution(root, k) {
	if(!root.left && !root.right) return root;
    
    let temp = root.right;
    root.right = root.left;
    root.left = temp;
    
    solution(root.left);
    solution(root.right);

    return root;
}

let leftLL = new Node(1);
let leftL = new Node(2, leftLL);
let rightL = new Node(6);
let leftR = new Node(10);
let rightR = new Node(14);
let left = new Node(4, leftL, rightL);
let right = new Node(12, leftR, rightR);
let root = new Node(8, left, right);

console.log(root)

console.log(solution(root, 5));

function Node(val, left, right) {
    this.val = (val===undefined ? 0 : val);
    this.left = (left===undefined ? null : left);
    this.right = (right===undefined ? null : right);
}