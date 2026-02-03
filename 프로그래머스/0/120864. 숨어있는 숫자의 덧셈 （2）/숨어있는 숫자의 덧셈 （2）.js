function solution(my_string) {
    let temp = '';
    let numArray = [];
    
    [...my_string].forEach((str, index, array) => {
        if(!isNaN(str)) {
            temp += str;
        }
        if(isNaN(str) || index === array.length-1) {
            if(temp !== '') {
                numArray.push(Number(temp));
                temp = '';
            }
        }
    });
    return numArray.reduce((acc, cur) => acc + cur, 0);
}