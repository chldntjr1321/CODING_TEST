function solution(num, k) {
    const numArray = [...String(num)].map(Number);
    const targetIndex = numArray.findIndex((el) => el === k);
    
    return targetIndex === -1 ? -1 : targetIndex + 1 ;
}