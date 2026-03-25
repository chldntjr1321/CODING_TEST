function solution(my_string, index_list) {
    let word = '';
    index_list.forEach((num) => word += my_string.slice(num, num + 1));
    
    return word;
}