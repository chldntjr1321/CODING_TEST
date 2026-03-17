function solution(s) {
    const isEven = s.length % 2 === 0;
    const mid = Math.floor(s.length / 2);
    const startIndex = isEven ? mid - 1 : mid;
    const endIndex = isEven ? startIndex + 2 : startIndex + 1;
    
    return s.slice(startIndex, endIndex);
}