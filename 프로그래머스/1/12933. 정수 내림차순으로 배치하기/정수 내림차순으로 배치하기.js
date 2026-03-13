function solution(n) {
    const sorted = [...String(n)].sort((a,b) => b-a).join('');
    
    return Number(sorted);
}