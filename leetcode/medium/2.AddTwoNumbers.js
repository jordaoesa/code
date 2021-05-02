function solution(l1, l2) {
    let sum = '';
    let rem = 0;
    while((l1 && l1.val !== undefined) || (l2 && l2.val !== undefined)) {
        let curr1 = 0, curr2 = 0;
        if(l1 && l1.val !== undefined) {
            curr1 = l1.val;
            l1 = l1.next;
        }
        if(l2 && l2.val !== undefined) {
            curr2 = l2.val;
            l2 = l2.next;
        }
        let currValue = parseInt(curr1 + curr2 + rem);
        rem = 0;
        if(currValue > 9) {
            let currValueStr = currValue.toString();
            currValue = parseInt(currValueStr[1]);
            rem = parseInt(currValueStr[0]);
        }
        sum = `${currValue}${sum}`;
    }
    if(rem > 0) sum = `${rem}${sum}`;
    
    let root;
    let idx = 0;
    while(idx < sum.length) {
        root = new ListNode(sum[idx++], root);
    }
    return root;
};

// console.log(solution(l1 = [2,4,3], l2 = [5,6,4]));
// console.log(solution(l1 = [0], l2 = [0]));
// console.log(solution(l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]));

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}