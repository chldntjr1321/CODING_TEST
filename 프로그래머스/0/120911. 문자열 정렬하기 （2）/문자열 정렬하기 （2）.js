function solution(my_string) {
    const lowerString = my_string.toLowerCase();
    
    return [...lowerString].sort((a, b) => a.localeCompare(b)).join('');
}