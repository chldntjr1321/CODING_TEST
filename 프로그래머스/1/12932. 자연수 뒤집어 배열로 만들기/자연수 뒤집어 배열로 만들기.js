function solution(n) {
    const strNum = n + '';
    let answer = [];
    [...strNum].forEach((str) => answer.push(Number(str)));
    
    return answer.reverse();
}