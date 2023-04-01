/* 2번 문제 답안을 작성해주세요. */
function solution(num_list) {
  var arr = [0, 0];
  for (let i = 0; i < num_list.length; i++) {
    if (num_list[i] % 2 === 1) {
      arr[1]++;
    } else {
      arr[0]++;
    }
  }
  return arr;
}
