function solution(n) {
    let pizza = 1;
    while(pizza) {
        if((pizza*6)%n===0) {
            return pizza;
        }
        pizza++;
    }
}