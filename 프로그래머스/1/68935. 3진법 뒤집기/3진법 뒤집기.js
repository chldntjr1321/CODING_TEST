function solution(n) {
    const reverseN = n.toString(3).split('').reverse().join('');
    
    return parseInt(reverseN, 3);
}