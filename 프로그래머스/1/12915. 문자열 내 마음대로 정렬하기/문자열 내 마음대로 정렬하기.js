function solution(strings, n) {
    strings.sort((a,b) => {
        let compare = a.charCodeAt(n) - b.charCodeAt(n);
        return compare === 0 ? a.localeCompare(b) : compare; 
    });
    return strings;
}