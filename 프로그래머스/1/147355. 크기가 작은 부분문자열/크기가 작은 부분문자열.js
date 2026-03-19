function solution(t, p) {
    let compareArr = [];
    
    for(let i=0; i<t.length; i++) {
        let target = t.slice(i, i + p.length);
        if(target.length === p.length) {
            compareArr.push(target);
        }
    }
    return compareArr.filter((num) => num <= p).length;
}