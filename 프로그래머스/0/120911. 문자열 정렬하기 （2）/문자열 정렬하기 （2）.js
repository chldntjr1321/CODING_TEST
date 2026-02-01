function solution(my_string) {
    const lowerString = my_string.toLowerCase();
    
    return [...lowerString].sort().join('');
}