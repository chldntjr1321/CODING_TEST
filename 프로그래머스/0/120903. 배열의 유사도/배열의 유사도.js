function solution(s1, s2) {
    let result = [];
    
    for(s of s1) {
        for(ss of s2) {
            if(s === ss) {
                result.push(ss);
            }
        }
    }
    return result.length;
    
}