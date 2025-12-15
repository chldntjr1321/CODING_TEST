function solution(numbers, k) {
    const n = numbers.length;
    const answerIndex = 2 * (k-1) % n;
    return numbers[answerIndex];
}