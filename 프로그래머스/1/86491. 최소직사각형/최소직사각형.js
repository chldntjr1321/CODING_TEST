function solution(sizes) {
    sizes.forEach((size) => size.sort((a,b) => a-b));
    const shortArr = sizes.map((size) => size[0]);
    const shortest = Math.max(...shortArr);
    const longArr = sizes.map((size) => size[1]);
    const longest = Math.max(...longArr);
    
    return longest * shortest;
    
}