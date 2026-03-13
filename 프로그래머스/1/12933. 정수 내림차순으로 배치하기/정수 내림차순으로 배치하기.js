function solution(n) {
    const sorted = [...String(n)].sort().reverse().join('');
    
    return Number(sorted);
}