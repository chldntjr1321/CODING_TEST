function solution(arr, divisor) {
    let target = [];
    target = arr.filter((num) => num % divisor === 0);
    
    return target.length > 0 ? target.sort((a,b) => a-b) : [-1];
}