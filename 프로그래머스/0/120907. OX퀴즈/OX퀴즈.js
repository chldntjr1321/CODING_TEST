function solution(quiz) {   
    return quiz.map((q) => {
        const [x, operator, y,  , answer] = q.split(' ');
        const quizResult = operator === '+' ? Number(x)+Number(y) : Number(x)-Number(y);
        
        return quizResult === Number(answer) ? 'O' : 'X';
    });
}