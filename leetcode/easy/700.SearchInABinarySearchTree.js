function solution(root, val) {
    if(!root) return null;
    if(root.val === val) return root;
    else if(val < root.val) return solution(root.left, val);
    else if(val > root.val) return solution(root.right, val);
}

function TreeNode(val, left, right) {
	this.val = (val===undefined ? 0 : val)
	this.left = (left===undefined ? null : left)
	this.right = (right===undefined ? null : right)
}

let leftL = new TreeNode(1);
let rightL = new TreeNode(3);
let left = new TreeNode(2, leftL, rightL);
let right = new TreeNode(7);
let root = new TreeNode(4, left, right);

console.log(solution(root, 2));