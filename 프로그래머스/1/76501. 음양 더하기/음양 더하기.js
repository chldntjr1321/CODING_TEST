function solution(absolutes, signs) {
    let newNums = [];
    
    for(let i=0; i<absolutes.length; i++) {
        newNums.push(signs[i] === false ? absolutes[i] *= -1 : absolutes[i]);
    }
    return newNums.reduce((acc, cur) => acc + cur);
}