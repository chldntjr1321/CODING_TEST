function solution(hp) {
    const generalAnt = Math.trunc(hp / 5);
    const eliteAnt = Math.trunc(hp % 5 / 3);
    const normalAnt = Math.trunc(hp % 5 % 3);
    
    return generalAnt + eliteAnt + normalAnt;
}