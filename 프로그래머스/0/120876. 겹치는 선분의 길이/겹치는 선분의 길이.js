function solution(lines) {
    const OFFSET = 100;
    const count = new Array(201).fill(0);
    
    lines.forEach(([start, end]) => {
        for (let i = start; i < end; i++) {
            count[i + OFFSET]++;
        }
    });
    
    return count.filter(c => c >= 2).length;
}