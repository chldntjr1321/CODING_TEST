function solution(numbers) {
    return numbers.reduce((accumulator,currentValue) => accumulator + currentValue) / numbers.length;
}