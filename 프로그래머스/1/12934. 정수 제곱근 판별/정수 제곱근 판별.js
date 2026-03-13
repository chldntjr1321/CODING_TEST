function solution(n) {
    const sqrtNum = Math.sqrt(n);
    
    return Number.isInteger(sqrtNum) ? Math.pow(sqrtNum+1, 2) : -1;
}