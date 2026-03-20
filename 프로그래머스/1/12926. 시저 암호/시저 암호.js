function solution(s, n) {
    let answer = '';
    s.split('').forEach((el) => {
        if(el === ' ') {
            answer += el;
            return;
        }
        const ascii = el.charCodeAt();
        if(ascii < 97) {
            const target = ascii + n > 90 ? 65 + (ascii - 65 + n) % 26 : ascii + n; 
            answer += String.fromCharCode(target);
        }
        else if(ascii < 123) {
            const target = ascii + n > 122 ? 97 + (ascii - 97 + n) % 26 : ascii + n;
            answer += String.fromCharCode(target);
        }
    })
    return answer;
}