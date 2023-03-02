// 인덱스 바꾸기
function solution(my_string, num1, num2) {
  let arr = my_string.split("");
  console.log([arr[num1], arr[num2]]);
  console.log([arr[num2], arr[num1]])[
    // 여기 구문이 이해가 안간다 밑에
    (arr[num1], arr[num2])
  ] = [arr[num2], arr[num1]];
  return arr.join("");
}

solution("hello", 1, 2);
