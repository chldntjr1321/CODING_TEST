function solution(s) {
    let result = [];
    let lastSeen = {};
    
    for(let i=0; i<s.length; i++) {
        const char = s[i];
        result.push(char in lastSeen ? i - lastSeen[char] : -1 );
        lastSeen[char] = i;
    }
    return result;
}