function solution(my_string) {
    let answer = '';
    
    [...my_string].forEach((str) => {
        answer += (str === str.toUpperCase()) ? str.toLowerCase() : str.toUpperCase();
    })
    return answer;
}