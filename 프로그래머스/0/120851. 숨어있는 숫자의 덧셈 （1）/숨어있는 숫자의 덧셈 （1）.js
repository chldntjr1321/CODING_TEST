function solution(my_string) {
    const stringToArray = my_string.split('');
    const filteredArray = stringToArray.filter((arr) => !isNaN(Number(arr)))
    return filteredArray.reduce((acc, cur) => Number(acc)+Number(cur));
}