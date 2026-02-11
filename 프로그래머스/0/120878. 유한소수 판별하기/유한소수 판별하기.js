function solution(a, b) {
    const gcdValue = gcd(a, b);
    let denom = b / gcdValue;
    
    while(denom % 2 === 0) {
        denom /= 2;
    }
    while(denom % 5 === 0) {
        denom /= 5;
    }
    return denom === 1 ? 1 : 2;
}

// 최대공약수(GCD) 구하는 방법
function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
}