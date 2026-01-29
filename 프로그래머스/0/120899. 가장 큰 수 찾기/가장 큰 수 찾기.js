function solution(array) {
    const target = Math.max(...array);
    
    return [target, array.indexOf(target)];
}