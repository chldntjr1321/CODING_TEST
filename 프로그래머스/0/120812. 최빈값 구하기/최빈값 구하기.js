function solution(array) {
    const countObj = {};
    
    array.forEach((el) => {
        countObj[el] = countObj[el] ? countObj[el]+1 : 1;
    });
    
    const filterArr = Object.entries(countObj).filter((arr) => {
        const maxCount = Math.max(...Object.values(countObj));
        return arr[1] === maxCount;
    })
    if(filterArr.length > 1) {
        return -1;
    } else {
        return Number(filterArr[0][0]);
    }
}