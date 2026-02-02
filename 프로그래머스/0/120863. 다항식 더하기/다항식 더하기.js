function solution(polynomial) {
    const terms = polynomial.split(' + ');
    let xSum = 0;
    let numSum = 0;
    
    terms.forEach(term => {
        if (term.includes('x')) {
            const coef = term.replace('x', '');
            xSum += coef === '' ? 1 : Number(coef);
        } else {
            numSum += Number(term);
        }
    });
    
    const result = [];
    
    if (xSum > 0) {
        result.push(xSum === 1 ? 'x' : `${xSum}x`);
    }
    if (numSum > 0) {
        result.push(`${numSum}`);
    }
    
    return result.join(' + ');
}