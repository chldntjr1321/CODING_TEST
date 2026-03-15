function solution(s){
    const newStr = s.toLowerCase();
    
    const pCount = [...newStr].filter((str) => str === 'p').length;
    const yCount = [...newStr].filter((str) => str === 'y').length;
    
    return pCount === yCount;
}