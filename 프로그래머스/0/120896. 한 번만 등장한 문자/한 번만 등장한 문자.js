function solution(s) {
    const charCount = {};
    for(let char of s) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    const result = [];
    for(let char in charCount) {
        if(charCount[char]===1) {
            result.push(char);
        }
    }
    return result.sort().join('');
}