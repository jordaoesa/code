/**
 * initialize your data structure here.
 */
var MinStack = function() {
	this.stack = [];
};

var MinStackItem = function(val, minKnown) {
	this.val = (val !== undefined ? val : 0);
	this.minKnown = minKnown;
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
	let topItem = this.stack[this.stack.length-1];
	let minKnown = topItem ? (topItem.minKnown < val ? topItem.minKnown : val) : val;
	let item = new MinStackItem(val, minKnown);
    this.stack.push(item);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
	this.stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
	let topItem = this.stack[this.stack.length-1];
	return topItem ? topItem.val : null;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
	let topItem = this.stack[this.stack.length-1];
	return topItem ? topItem.minKnown : null;
};

MinStack.prototype.all = function() {
    return this.stack;
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

let minStack = new MinStack();
minStack.push(-2)
minStack.push(0)
minStack.push(-3)
// console.log(minStack.all())
console.log(`min == -3: ${minStack.getMin() === -3} ::${minStack.getMin()}`);
minStack.pop()
// console.log(minStack.all())
console.log(`top == 0: ${minStack.top() === 0} ::${minStack.top()}`);
// console.log(minStack.all())
console.log(`min == -2: ${minStack.getMin() === -2} ::${minStack.getMin()}`);
minStack.pop();
// console.log(minStack.all())
minStack.pop();
// console.log(minStack.all())
minStack.push(-3)
minStack.push(-2)
minStack.push(-1)
minStack.push(0)
minStack.push(1)
minStack.push(2)
minStack.push(3)
console.log(`min == -3: ${minStack.getMin() === -3} ::${minStack.getMin()}`);
minStack.push(-4)
console.log(`min == -4: ${minStack.getMin() === -4} ::${minStack.getMin()}`);
minStack.push(6)
minStack.push(-3)
minStack.push(-2)
console.log(`min == -4: ${minStack.getMin() === -4} ::${minStack.getMin()}`);
minStack.push(7)
minStack.push(-6)
console.log(`min == -6: ${minStack.getMin() === -6} ::${minStack.getMin()}`);
minStack.push(-7)
minStack.push(5)
// console.log(minStack.all())
console.log(`min == -7: ${minStack.getMin() === -7} ::${minStack.getMin()}`);