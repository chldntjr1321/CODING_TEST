function solution(sides) {
    const longestSide = Math.max(...sides);
    const longestSideIndex = sides.indexOf(longestSide);
    const otherSidesArray = sides.filter((side, index) => index !== longestSideIndex);
    const sumOthers = otherSidesArray.reduce((acc,cur) => acc+cur)
    
    return longestSide < sumOthers ? 1 : 2;
}