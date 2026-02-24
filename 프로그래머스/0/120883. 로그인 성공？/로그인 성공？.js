function solution(id_pw, db) {
    let correctId = false;
    let correctPw = false;
    
    db.forEach((info) => {
        if(id_pw[0] === info[0]) {
            correctId = true;
            if(id_pw[1] === info[1]) {
                correctPw = true;
            }
        }
    })
    
    if(correctId && correctPw) {return 'login'}
    else if(correctId && !correctPw) {return 'wrong pw'}
    else return 'fail';
}