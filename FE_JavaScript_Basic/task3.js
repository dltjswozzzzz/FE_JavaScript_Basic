/* 3번 문제 답안을 작성해주세요. */

function solution(n) {
  let num = 1;

  for (let i = 1; i <= n; i++) {
    num *= i;

    if (num === n) {
      return i;
    }

    if (num > n) {
      return i - 1;
    }
  }
}
