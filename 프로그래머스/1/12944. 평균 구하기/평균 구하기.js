function solution(arr) {
    const total =  arr.reduce((acc, cur) => acc + cur);
    
    return total / arr.length;
}