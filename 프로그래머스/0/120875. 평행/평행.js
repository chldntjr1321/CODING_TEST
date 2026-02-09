function solution(dots) {
    const isParallel = (p1, p2, p3, p4) => {
        // (y2-y1) * (x4-x3) === (y4-y3) * (x2-x1)
        return (p2[1] - p1[1]) * (p4[0] - p3[0]) === (p4[1] - p3[1]) * (p2[0] - p1[0]);
    };
    
    if (isParallel(dots[0], dots[1], dots[2], dots[3])) return 1;
    if (isParallel(dots[0], dots[2], dots[1], dots[3])) return 1;
    if (isParallel(dots[0], dots[3], dots[1], dots[2])) return 1;
    
    return 0;
}