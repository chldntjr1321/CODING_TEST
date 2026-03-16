function solution(numbers) {
    // 0부터 9까지 전부 더하면 45
    return 45 - numbers.reduce((acc, cur) => acc + cur); 
}