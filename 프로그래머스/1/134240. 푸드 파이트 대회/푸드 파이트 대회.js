function solution(food) {
    let leftArr = [];
    for(let i=1; i<food.length; i++) {
        const half = Math.floor(food[i]/2);
        for(let j=0; j<half; j++) {
            leftArr.push(i);
        }
    }
    return [...leftArr,0,...leftArr.reverse()].join('');
}