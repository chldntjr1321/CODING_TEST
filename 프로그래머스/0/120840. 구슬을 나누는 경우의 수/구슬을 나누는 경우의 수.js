function solution(balls, share) {
    // 팩토리얼 함수
    function factorial(n) {
        let result = 1n;
        for(let i = 1n; i<=BigInt(n); i++) {
            result *= i;
        }
        return result;
    }
    
    return factorial(balls) / ( factorial(balls-share) * factorial(share) );
}