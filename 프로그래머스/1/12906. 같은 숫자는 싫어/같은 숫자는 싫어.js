function solution(arr) {
    return arr.filter((num, i) => i === 0 || num !== arr[i-1]);
}