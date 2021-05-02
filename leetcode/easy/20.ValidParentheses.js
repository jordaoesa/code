function solution(s) {
    let open = {'(': 1, '[': 1, '{': 1};
    let close = {')': 1, ']': 1, '}': 1};
    let stack = [];
    for(let c of s) {
        if(open[c]) stack.push(c);
        if(close[c]) {
            let removed = stack.splice(stack.length-1);
            if(!matches(c, removed[0])) return false;
        }
    }
    return stack.length === 0;
};

function matches(closing, open) {
    return (closing === ')' && open === '(')
        || (closing === '}' && open === '{')
        || (closing === ']' && open === '[');
}

console.log(solution("()"));
console.log(solution("()[]{}"));
console.log(solution("(]"));
console.log(solution("([)]"));
console.log(solution("{[]}"));