function solution(my_string) {
    const targetChars = new Set (['a', 'e', 'i', 'o', 'u']);
    return my_string.split('').filter((char) => !targetChars.has(char)).join('');
}