function solution(n) {
  let fact = 1;
  let i = 1;

  while (fact * i <= n) {
    fact *= i;
    i++;
  }

  return i - 1;
}