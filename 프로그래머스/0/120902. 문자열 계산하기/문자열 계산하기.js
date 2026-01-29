function solution(my_string) {
    const splitString = my_string.split(' ');
    let result = 0;
    let operator = '+';
    
    splitString.forEach((str) => {
        if(!isNaN(str)) { operator === '+' ? result += Number(str)  : result -= Number(str); }
        else { operator = str; }
    })
    return result;
}