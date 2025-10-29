function solution(numbers, direction) {
    let answer = [];
    
    if(direction === 'right') {
        const lastArr = numbers.pop();
        answer = [lastArr,...numbers];
    } else {
        const firstArr = numbers.shift();
        answer = [...numbers, firstArr];
    }
    
    return answer;
}