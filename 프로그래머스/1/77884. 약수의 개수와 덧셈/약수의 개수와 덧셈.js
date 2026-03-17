function solution(left, right) {
    let sum = 0;
    while(left <= right) {
        let i = 1;
        let count = 0;
        while(i <= left) {
            if(left % i === 0){
                count++;
            }
            i++;
        }
        sum += count % 2 === 0 ? left : -left;
        left++;
    }
    return sum;
}