function solution(s) {
    // 정규식 의미: 문자열의 처음(^)부터 끝($)까지 숫자(\d)만 1개 이상(+) 있어야 한다.
    const isNumber = /^\d+$/.test(s);
    const lengthCheck = s.length === 4 || s.length === 6;
    
    return isNumber && lengthCheck;
}