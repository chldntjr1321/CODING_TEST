function solution(arr) {
    const min = Math.min(...arr);
    const newArr = arr.filter((num) => num > min);
    
    return newArr.length > 0 ? newArr : [-1];
}