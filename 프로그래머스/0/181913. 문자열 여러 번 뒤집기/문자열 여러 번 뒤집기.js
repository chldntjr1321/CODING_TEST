function solution(my_string, queries) {
    queries.forEach((range) => {
        let front = my_string.slice(0,range[0]);
        let mid = my_string.slice(range[0], range[1]+1);
        let end = my_string.slice(range[1] +1)
        my_string = front + [...mid].reverse().join('') + end;
    })
    return my_string;
}