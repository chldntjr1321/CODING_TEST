function solution(array, commands) {
    let answer = [];
    
    for(let i=0; i<commands.length; i++) {
        const [c1, c2, c3] = commands[i];
        const temp = array.slice(c1 - 1, c2).sort((a, b) => a - b);
        answer.push(temp[c3 - 1]);
    }
    return answer;
}