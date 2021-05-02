function solution(head) {
	let reversed;
	while(head !== null) {
		reversed = new ListNode(head.val, reversed);
		head = head.next;
	}
	return reversed ? reversed : head;
}

let fifth = new ListNode(5)
let fourth = new ListNode(4, fifth)
let third = new ListNode(3, fourth)
let second = new ListNode(2, third)
let head = new ListNode(1, second)

console.log(JSON.stringify(solution(head)));

function ListNode(val, next) {
	this.val = (val===undefined ? 0 : val)
	this.next = (next===undefined ? null : next)
}