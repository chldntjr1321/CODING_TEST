function solution(board) {
    const n = board.length;
    const dangerSet = new Set();
    
    const markDanger = (i, j) => {
        const directions = [
            [-1, -1], [-1, 0], [-1, 1],
            [0, -1],  [0, 0],  [0, 1],
            [1, -1],  [1, 0],  [1, 1]
        ];
        
        for (const [di, dj] of directions) {
            const ni = i + di;
            const nj = j + dj;
            
            if (ni >= 0 && ni < n && nj >= 0 && nj < n) {
                dangerSet.add(`${ni},${nj}`);
            }
        }
    };
    
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === 1) {
                markDanger(i, j);
            }
        }
    }
    
    return n * n - dangerSet.size;
}