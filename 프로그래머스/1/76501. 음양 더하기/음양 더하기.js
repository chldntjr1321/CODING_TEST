function solution(absolutes, signs) {
    let newNums = [];
    
    for(let i=0; i<absolutes.length; i++) {
        newNums.push(signs[i] ? absolutes[i] : absolutes[i] *= -1);
    }
    return newNums.reduce((acc, cur) => acc + cur);
}