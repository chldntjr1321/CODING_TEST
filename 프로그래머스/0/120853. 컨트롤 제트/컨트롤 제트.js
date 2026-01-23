function solution(s) {
    let stack = [];
    const sArray = s.split(' ');
    
    sArray.forEach((arr) => !isNaN(arr) ? stack.push(Number(arr)) : stack.pop());
    
    return stack.reduce((acc, cur) => acc + cur, 0);
}