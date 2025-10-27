function solution(emergency) {
    const sortedArr = [...emergency].sort((a,b) => b-a);
    
    const answer = emergency.map( num => sortedArr.indexOf(num) + 1 );
    
    return answer;
}