function solution(n) {
    const nArray = [...String(n)].map(Number);
    
    return nArray.reduce((acc, cur) => acc + cur);
}