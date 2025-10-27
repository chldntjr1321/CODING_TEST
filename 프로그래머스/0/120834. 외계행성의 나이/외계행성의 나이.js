function solution(age) {
    const stringAge = age.toString();
    let answer = '';

    for(let i=0; i<stringAge.length; i++) {
        let ascii = stringAge.charCodeAt(i);
        answer += String.fromCharCode( 97 + (ascii-48) );
    }
    return answer;
}