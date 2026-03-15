function solution(a, b) {
    const bigNum = Math.max(a,b);
    const smallNum = Math.min(a,b);
    let answer = 0;
    
    for(let i=smallNum; i<=bigNum; i++) {
        answer += i;
    }
    return answer;
}