function solution(n) {
    const result = [];
    
    for(let i = 2; i <= n; i++) {
        if(n % i === 0) {
            if(!result.includes(i)) {
                result.push(i);
            }
            while(n%i===0) {
                n = n / i;
            }
            
        }
    }
    
    return result;
}