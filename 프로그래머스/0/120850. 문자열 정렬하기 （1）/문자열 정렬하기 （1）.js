function solution(my_string) {
    const stringToArray = my_string.split('');
    const filteredArray = stringToArray.filter((str)=> !isNaN(Number(str)) );
    const sortedArray = filteredArray.sort((a,b) => a - b);
    return sortedArray.map(s => Number(s));
}