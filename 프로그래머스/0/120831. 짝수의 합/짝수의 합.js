function solution(n) {
    const evenArr = [];
    for(let i = 2; i <= n; i+=2) {
        evenArr.push(i);
    }
    return evenArr.reduce((acc, cur) => acc + cur, 0);
}