function solution(n) {
    let answer = [];
    for(let i = 1; i <= n; i++) {
        answer.push(i);
    }
    return answer.filter((el) => el % 2 === 1)
    
    // for(let i = 1; i <= n; i += 2) {
    //     answer.push(i)
    // }
    // return answer;
}