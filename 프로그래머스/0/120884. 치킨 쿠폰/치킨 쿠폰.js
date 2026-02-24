function solution(chicken) {
    let result = 0;
    let coupon = chicken;
    
    while(coupon >= 10) {
        const service = Math.floor(coupon / 10);
        const remain = coupon % 10;
        
        result += service;
        coupon = service + remain;
    }
    return result;
}