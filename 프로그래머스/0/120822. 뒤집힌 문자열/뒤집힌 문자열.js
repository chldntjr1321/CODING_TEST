function solution(my_string) {
    const myArr = my_string.split("");
    const reverseArr = myArr.reverse();
    const answer = reverseArr.join("");
    
    return answer;
}