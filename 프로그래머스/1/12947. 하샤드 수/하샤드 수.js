function solution(x) {
    const strN = x + '';
    let sum = 0;
    
    [...strN].forEach((str) => sum += Number(str));
    const isHarshad = x % sum === 0;
    
    return isHarshad;
}