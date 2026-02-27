function solution(A, B) {
    let count = 0;
    
    for(let i=0; i<A.length; i++) {
        if(A === B) {
            return count;
        }
        let temp = A[A.length - 1];
        let newA = temp + A.slice(0,-1);
        A = newA;
        count++;
    }
    return -1;
}