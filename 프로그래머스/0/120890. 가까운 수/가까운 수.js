function solution(array, n) {
    let minDiff = Math.abs(array[0] - n);
    let answer = array[0];
    
    array.forEach((num) => {
        let currentDiff = Math.abs(num - n);
        if(currentDiff < minDiff) {
            answer = num;
            minDiff = Math.abs(num-n);
        } else if(currentDiff === minDiff) {
            answer = Math.min(answer, num);
        }
    })
    return answer;
}
