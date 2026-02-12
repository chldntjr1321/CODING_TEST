function solution(score) {
    const scoreAvg = score.map((s) => {
        return (s[0] + s[1]) / 2;
    })
    
    const ranks = scoreAvg.map((myAvg) => {
        const higherCounter = scoreAvg.filter((avg) => avg > myAvg).length;
        
        return higherCounter + 1;
    })
    return ranks;
}