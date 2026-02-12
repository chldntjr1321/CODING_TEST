function solution(babbling) {
    const canSpeak = ['aya', 'ye', 'woo', 'ma'];
    
    return babbling.filter((word) => {
        let temp = word;
        canSpeak.forEach((w) => temp = temp.replace(w, ' '));
        
        return temp.trim() === '';
    }).length;
}