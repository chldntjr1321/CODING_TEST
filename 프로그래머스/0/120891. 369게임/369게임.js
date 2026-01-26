function solution(order) {
    const result = [...String(order)].filter((num) => num !== '0' && num % 3 === 0);
    
    return result.length;
}