function solution(keyinput, board) {    
    let [x, y] = [0, 0];
    const maxX = Math.floor(board[0] / 2);
    const maxY = Math.floor(board[1] / 2);
    const direction = {
        up: [0, 1],
        down: [0, -1],
        left: [-1, 0],
        right: [1, 0],
    };
    
    keyinput.forEach((key) => {
        const newX = x + direction[key][0];
        const newY = y + direction[key][1];
        
        if(newX >= -maxX && newX <= maxX) {
            x = newX;
        }
        if(newY >= -maxY && newY <= maxY) {
            y = newY;
        }
    });
    return [x, y];
}