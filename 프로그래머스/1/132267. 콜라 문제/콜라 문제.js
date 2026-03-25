function solution(a, b, n) {
    let getCoke = 0;
    
    
    while(n >= a) {
        getCoke += Math.floor(n / a) * b;
        n = (n % a) + Math.floor(n / a) * b
    }
    return getCoke;
}