function solution(k, score) {
    let honor = [];
    let answer = [];

    score.forEach((n) => {
        honor.push(n);
        honor.sort((a, b) => b - a);
        if (honor.length > k) {
            honor.pop();
        }
        answer.push(honor[honor.length - 1]);
    });
    return answer;
}