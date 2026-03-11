function solution(num, total) {
    let result = [];
    const startNum = (total * 2 / num - num + 1) / 2;
    
    for(let i = startNum; result.length < num; i++) {
        result.push(i);
    }   
    return result;
}