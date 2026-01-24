function solution(my_string) {
    let answer = [];
    const myArray = my_string.split('');
    myArray.forEach((str) => {
        if(!answer.includes(str)) {
            answer.push(str);
        }
    })
    return answer.join('');
}