function solution(n) {
    let result = 0;
    
    for(let i=0; i<n; i++) {
        do {
            result++;
        } while( result%3===0 || String(result).includes('3') )
    }
    return result;
}