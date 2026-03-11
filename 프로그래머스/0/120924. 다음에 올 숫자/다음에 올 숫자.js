function solution(common) {
    const frontDiff = common[1] - common[0];
    const backDiff = common[2] - common[1];
    const last = common.at(-1);
    const isDiff = frontDiff === backDiff;
    
    if(isDiff) {
        return last + frontDiff;
    } else {
        const ratio = common[1] / common[0];
        return last * ratio;
    }
}