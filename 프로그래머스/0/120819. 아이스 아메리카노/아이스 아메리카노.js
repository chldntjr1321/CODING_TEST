function solution(money) {
    const coffeeCount = Math.trunc(money/5500);
    const change = money - (5500*coffeeCount);
    
    return [coffeeCount, change];
    
}