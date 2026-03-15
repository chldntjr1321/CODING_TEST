function solution(n)
{
    const strN = n + '';
    let answer = 0;
    
    [...strN].forEach((str) => answer += parseInt(str));
    
    return answer;
}