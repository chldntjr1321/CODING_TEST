process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const [n, m] = data.trim().split(' ').map(Number);
    
    for(let i=0; i<m; i++) {
        let stars = '';
        for(let j=0; j<n; j++) {
            stars += '*';
        }
        console.log(stars);
    }
});