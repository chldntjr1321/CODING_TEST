function solution(sides) {
    let longestCount = 0;
    let otherCount = 0;
    const sumSides = sides[0] + sides[1];
    const longSide = Math.max(...sides);
    const shortSide = Math.min(...sides);
    
    // 제일 긴 변일 경우
    for(let i=longSide; i<sumSides; i++) {
        longestCount++;
    }
    
    // 제일 긴 변이 아닐 경우
    for(let i=1; i<longSide; i++) {
        if((i + shortSide) > longSide) {
            otherCount++;
        }
    }
    return longestCount + otherCount;
}