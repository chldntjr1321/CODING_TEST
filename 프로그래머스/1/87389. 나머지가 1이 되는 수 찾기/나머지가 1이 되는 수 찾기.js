function solution(n) {
    let result = 1;
    
    for(let i=2; i<n; i++) {
        if (n % i === 1) {
            result = i;
            return result;
        }
    }
}