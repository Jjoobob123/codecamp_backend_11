// 괄호 회전시키기

const numbering = {
  "[": 0,
  "]": 1,
  "{": 2,
  "}": 3,
  "(": 4,
  ")": 5,
};

// function solution(s) {
//   let answer = 0
//   for(let i = 0; i< s.length; i++){
//     // 왼쪽으로 한칸씩 밀기
//     s = s.slice(1) + s[0];
//     const stack = []

//     for( let j = 0; j < s.length; j++){
//         //  열린 괄호인지, 닫힌 괄오인지 판단( 열림:짝수, 닫힘: 홀수)
//         if( numbering[ s[j] ] % 2 === 0 ){
//           stack.push( numbering[ s[j] ] ) // 숫자로 스택에 추가

//         } else {
//           // 닫힌 괄호라면 stack에 그 짝이 있는지 체크
//           if( stack.includes( numbering[ s[j] ] - 1 ) ){
//             const last = stack[ stack.length -1 ];

//             if( last === numbering[ s[j] ] -1 ){
//               stack.splice( stack.length -1,1)
//             }
//           } else {
//             // 본인의 짝이 없다면 잘못된 괄호
//             break;
//           }
//         }
//         // 가장 마지막을 체크하면서, 모든 괄호의 짝이 동등하게 맞을 때!
//         if( j === s.length -1 ){
//             if(stack.length === 0){
//               answer ++
//             }
//         }
//       }
//     }
//   return answer
// }

function solution(s) {
  // if(s.length % 2 === 1)
  //   return 0;

  let answer = 0;
  const mapping = { "}": "{", "]": "[", ")": "(" };

  for (let i = 0; i < s.length; i++) {
    const stack = [];
    // 왼쪽에 있는 인자를 맨 끝으로 이동한다. (문자열이기 떄문에 slice 를 이용해준다.)
    const rotate = s.slice(i) + s.slice(0, i);

    let flag = true;

    for (let j = 0; j < s.length; j++) {
      if (rotate[j] === "[" || rotate[j] === "(" || rotate[j] === "{")
        stack.push(rotate[j]);
      else {
        const last = stack.pop();
        console.log(mapping[rotate[j]], j, "@@@", last);
        if (last !== mapping[rotate[j]]) {
          flag = false;
          break;
        }
      }
    }

    if (flag) answer++;
  }

  return answer;
}

solution("[](){}");
