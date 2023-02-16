// 20일차
// 당신은 폰켓몬을 잡기 위한 오랜 여행 끝에, 홍 박사님의 연구실에 도착했습니다.
// 홍 박사님은 당신에게 자신의 연구실에 있는 총 N 마리의 폰켓몬 중에서 N/2마리를 가져가도 좋다고 했습니다.
// 홍 박사님 연구실의 폰켓몬은 종류에 따라 번호를 붙여 구분합니다.
// 따라서 같은 종류의 폰켓몬은 같은 번호를 가지고 있습니다.
// 예를 들어 연구실에 총 4마리의 폰켓몬이 있고, 각 폰켓몬의 종류 번호가 [3번, 1번, 2번, 3번]이라면 이는 3번 폰켓몬 두 마리, 1번 폰켓몬 한 마리, 2번 폰켓몬 한 마리가 있음을 나타냅니다. 이때, 4마리의 폰켓몬 중 2마리를 고르는 방법은 다음과 같이 6가지가 있습니다.

// 첫 번째(3번), 두 번째(1번) 폰켓몬을 선택
// 첫 번째(3번), 세 번째(2번) 폰켓몬을 선택
// 첫 번째(3번), 네 번째(3번) 폰켓몬을 선택
// 두 번째(1번), 세 번째(2번) 폰켓몬을 선택
// 두 번째(1번), 네 번째(3번) 폰켓몬을 선택
// 세 번째(2번), 네 번째(3번) 폰켓몬을 선택
// 이때, 첫 번째(3번) 폰켓몬과 네 번째(3번) 폰켓몬을 선택하는 방법은
// 한 종류(3번 폰켓몬 두 마리)의 폰켓몬만 가질 수 있지만,
// 다른 방법들은 모두 두 종류의 폰켓몬을 가질 수 있습니다.
// 따라서 위 예시에서 가질 수 있는 폰켓몬 종류 수의 최댓값은 2가 됩니다.
// 당신은 최대한 다양한 종류의 폰켓몬을 가지길 원하기 때문에,
// 최대한 많은 종류의 폰켓몬을 포함해서 N/2마리를 선택하려 합니다.
// N마리 폰켓몬의 종류 번호가 담긴 배열 nums가 매개변수로 주어질 때,
// N/2마리의 폰켓몬을 선택하는 방법 중,
// 가장 많은 종류의 폰켓몬을 선택하는 방법을 찾아,
// 그때의 폰켓몬 종류 번호의 개수를 return 하도록 solution 함수를 완성해주세요.

0.001;
// function solution(nums) {
//     const answer = [];

//     for(let i = 0; i < nums.length; i++){
//         if( !answer.includes(nums[i])  && answer.length !== (nums.length/2)){
//             answer.push(nums[i])
//         }

//     }
//     return answer.length

// }

0.002;
function solution(nums) {
  // const answer = [];
  const answer = new Set([]);

  for (let i = 0; i < nums.length; i++) {
    console.log([nums[i], answer.size], answer);
    if (nums.length / 2 !== answer.size) {
      answer.add(nums[i]);
    }
  }
  return answer.size;
}


//21일차
/ 시저 암호
// 문제 설명
// 어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 바꾸는 암호화 방식을 시저 암호라고 합니다. 
// 예를 들어 "AB"는 1만큼 밀면 "BC"가 되고, 3만큼 밀면 "DE"가 됩니다. "z"는 1만큼 밀면 "a"가 됩니다. 
// 문자열 s와 거리 n을 입력받아 s를 n만큼 민 암호문을 만드는 함수, solution을 완성해 보세요.

// 제한 조건
// 공백은 아무리 밀어도 공백입니다.
// s는 알파벳 소문자, 대문자, 공백으로만 이루어져 있습니다.
// s의 길이는 8000이하입니다.
// n은 1 이상, 25이하인 자연수입니다.
// 입출력 예
// s    n    result
// "AB"    1    "BC"
// "z"    1    "a"
// "a B z"    4    "e F d"

function solution21_1(s, n) {
  let al = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz";
  let AL = "ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let result = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      result += " ";
    } else if (s[i].toUpperCase() === s[i]) {
      result += AL[AL.indexOf(s[i]) + n];
    } else {
      result += al[al.indexOf(s[i]) + n];
    }
  }
  return result;
}

function solution21_2(s, n) {
  const al = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let result = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      result += s[i];
    } else {
      let idx = al.indexOf(s[i]);
      const word = idx > 25 ? al.slice(26) : al.slice(0, 26);
      idx = word.indexOf(s[i]) + n;

      result += word[idx % 26];
    }
  }
  return result;
}
function solution21_3(s, n) {
  const lower = "abcdefghijklmnopqrstuvwxyz";
  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  let result = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      result += s[i];
    } else {
      const word = lower.includes(s[i]) ? lower : upper;
      let idx = word.indexOf(s[i]);

      result += word[(idx + n) % word.length];
    }
  }
  return result;
}

function solution21_4(s, n) {
  const lower = "abcdefghijklmnopqrstuvwxyz";
  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const result = s.split("").reduce((acc, cur) => {
    const word = lower.includes(cur) ? lower : upper;
    let idx = word.indexOf(cur) + n;
    if (idx > 25) {
      idx -= 26;
    }
    return acc + (cur === " " ? " " : word[idx]);
  }, "");

  return result;
}

// 아스키 코드
// charCodeAt : 주어진 문자의 유니코드 데이터를(숫자) 반환
// String.fromCharCode : 유니코드 데이터(숫자)를 문자열로 반환

function solution21_5(s, n) {
  let result = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      result += " ";
    } else {
      // console.log(s[i].charCodeAt()) // a = 97 Z = 65
      let idx = s[i].charCodeAt() + n;
      if (idx > 122 || (idx > 90 && idx - n < 97)) {
        idx -= 26;
      }

      result += String.fromCharCode(idx);
    }
  }
  return result;
}

// 숫자 문자열과 영단어
// 문제 설명
// img1.png

// 네오와 프로도가 숫자놀이를 하고 있습니다. 네오가 프로도에게 숫자를 건넬 때 일부 자릿수를 영단어로 바꾼 카드를 건네주면 프로도는 원래 숫자를 찾는 게임입니다.

// 다음은 숫자의 일부 자릿수를 영단어로 바꾸는 예시입니다.

// 1478 → "one4seveneight"
// 234567 → "23four5six7"
// 10203 → "1zerotwozero3"
// 이렇게 숫자의 일부 자릿수가 영단어로 바뀌어졌거나, 혹은 바뀌지 않고 그대로인 문자열 s가 매개변수로 주어집니다. s가 의미하는 원래 숫자를 return 하도록 solution 함수를 완성해주세요.

// 참고로 각 숫자에 대응되는 영단어는 다음 표와 같습니다.

// 숫자    영단어
// 0    zero
// 1    one
// 2    two
// 3    three
// 4    four
// 5    five
// 6    six
// 7    seven
// 8    eight
// 9    nine
// 제한사항
// 1 ≤ s의 길이 ≤ 50
// s가 "zero" 또는 "0"으로 시작하는 경우는 주어지지 않습니다.
// return 값이 1 이상 2,000,000,000 이하의 정수가 되는 올바른 입력만 s로 주어집니다.

function solution22_1(s) {
  let a = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  for (let i = 0; i < a.length; i++) {
    s = s.replaceAll(a[i], i);
  }
  return Number(s);
}

// 정규 표현식 사용
const numbers = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];

function solution22_1_2(s) {
  // s = s.replace(/number[i]/g, i) // 이런 방법 사용 불가
  for (let i = 0; i < a.length; i++) {
    const regExp = new RegExp(a[i], "g"); // (검증할 내용, 옵션)

    s = s.replace(regExp, i);
  }
}
// 소수 만들기
// 문제 설명
// 주어진 숫자 중 3개의 수를 더했을 때 소수가 되는 경우의 개수를 구하려고 합니다. 
// 숫자들이 들어있는 배열 nums가 매개변수로 주어질 때, 
// nums에 있는 숫자들 중 서로 다른 3개를 골라 더했을 때 소수가 되는 경우의 개수를 
// return 하도록 solution 함수를 완성해주세요.

// 제한사항
// nums에 들어있는 숫자의 개수는 3개 이상 50개 이하입니다.
// nums의 각 원소는 1 이상 1,000 이하의 자연수이며, 중복된 숫자가 들어있지 않습니다.
// 입출력 예
// nums    result
// [1,2,3,4]    1
// [1,2,7,6,4]    4

function solution22_2(nums) {
  nums = nums.sort((a, b) => a - b);
  let temp = [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        temp.push(nums[i] + nums[j] + nums[k]);
      }
    }
  }

  let nonPrime = [];

  for (let i = 0; i < temp.length; i++) {
    for (let j = 2; j < temp[i]; j++) {
      if (temp[i] % j == 0) {
        nonPrime.push(temp[i]);
        break;
      }
    }
  }

  return temp.length - nonPrime.length;
}

function solution22_2_1(nums) {
  let answer = 0;
  let index = 0;

  nums.forEach((num1, i) => {
    index = i + 1;
    nums.slice(index).forEach((num2) => {
      index += 1;
      nums.slice(index).forEach((num3) => {
        const sum = num1 + num2 + num3;
        let count = 0;
        for (let k = i; k <= sum; k++) {
          if (sum % k === 0) {
            count++;
            console.log(count);
            if (count > 2) {
              break;
            }
          }
        }
        if (count === 2) {
          answer++;
        }
      });
    });
  });
  return answer;
}

// 23일차
.001

// 슈퍼 게임 개발자 오렐리는 큰 고민에 빠졌다. 그녀가 만든 프랜즈 오천성이 대성공을 거뒀지만, 
// 요즘 신규 사용자의 수가 급감한 것이다. 원인은 신규 사용자와 기존 사용자 사이에 스테이지 차이가 
// 너무 큰 것이 문제였다.

// 이 문제를 어떻게 할까 고민 한 그녀는 동적으로 게임 시간을 늘려서 난이도를 조절하기로 했다. 
// 역시 슈퍼 개발자라 대부분의 로직은 쉽게 구현했지만, 실패율을 구하는 부분에서 위기에 빠지고 말았다. 
// 오렐리를 위해 실패율을 구하는 코드를 완성하라.

// 실패율은 다음과 같이 정의한다.
// 스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수 / 스테이지에 도달한 플레이어 수
// 전체 스테이지의 개수 N, 게임을 이용하는 사용자가 현재 멈춰있는 스테이지의 번호가 
// 담긴 배열 stages가 매개변수로 주어질 때, 실패율이 높은 스테이지부터 내림차순으로 스테이지의 번호가 담겨있는 배열을 return 하도록 solution 함수를 완성하라.

// 제한사항
// 스테이지의 개수 N은 1 이상 500 이하의 자연수이다.
// stages의 길이는 1 이상 200,000 이하이다.
// stages에는 1 이상 N + 1 이하의 자연수가 담겨있다.
// 각 자연수는 사용자가 현재 도전 중인 스테이지의 번호를 나타낸다.
// 단, N + 1 은 마지막 스테이지(N 번째 스테이지) 까지 클리어 한 사용자를 나타낸다.
// 만약 실패율이 같은 스테이지가 있다면 작은 번호의 스테이지가 먼저 오도록 하면 된다.
// 스테이지에 도달한 유저가 없는 경우 해당 스테이지의 실패율은 0 으로 정의한다.


.01

function solution(N, stages) {
  //모든 스테이지의 번호를 오름차순으로정렬
  stages.sort((a,b) => a - b)
  
  const failArr = []; // 스테이지에 해당되는 유저 수 , 실패율을 저장하는 배열 
  
  for( let i = 1; i <= N; i++){
      failArr.push({
          stage: i, // 스테이지번호
          users: 0, // 클리어 하지 못한 유저의 수
          fail : 0, // 실패율
      })
  }
  let allUsers = stages.length; // 총 유저의 수 저장 
  for(let i = 0; i < stages.length; i++){
      if( failArr[ stages[i] - 1 ] !== undefined){
          failArr[ stages[i] - 1 ].users++;
          
          //현재 스테이지 번호와 다음 스테이지 번호가 다를 때
          // === 현재 스테이지의 정보 참조가 끝났을 때 
          if( stages[i] !== stages[i + 1]){
              const fail = failArr[ stages[i] - 1].users / allUsers
              
              
              allUsers -= failArr[ stages[i] - 1].users
              
              failArr[ stages[i] - 1].fail = fail
          }
      }
  }
  const answer = failArr.sort((a , b ) =>b.fail - a.fail)
  
  return answer.map((el ) => {
      return el.stage
  })
  
}

.02


//indexOf
const arr = [1, 2, 2 ,2 ,2 ,3 ,3 ,4 ,5]

arr.indexOf(2)

// lastIndexOf
arr.lastIndexOf(2);

arr.slice(arr.indexOf(2) , arr.lastIndexOf(2) + 1)



//indexOf
const arr = [1, 2, 2 ,2 ,2 ,3 ,3 ,4 ,5]

arr.indexOf(2)

// lastIndexOf
arr.lastIndexOf(2);

arr.slice(arr.indexOf(2) , arr.lastIndexOf(2) + 1)

// 26일차

// 피보나치 수
// 피보나치 수는 F(0) = 0, F(1) = 1일 때, 1 이상의 n에 대하여 F(n) = F(n-1) + F(n-2) 가 적용되는 수 입니다.

// 예를들어

// F(2) = F(0) + F(1) = 0 + 1 = 1
// F(3) = F(1) + F(2) = 1 + 1 = 2
// F(4) = F(2) + F(3) = 1 + 2 = 3
// F(5) = F(3) + F(4) = 2 + 3 = 5
// 와 같이 이어집니다.

// 2 이상의 n이 입력되었을 때, n번째 피보나치 수를 1234567으로 나눈 나머지를 리턴하는 함수, solution을 완성해 주세요.

.001 
function solution(n) {

    let answer = new Array(2).fill(1)
    for(let i = 2; i < n; i++){
      answer.push((answer[answer.length - 1]+answer[answer.length - 2]) % 1234567)
          
    }
  return answer[answer.length-1]
}

.002
function solution(n) {
  let array = [1,1]
    for(let i = 2; i < n; i++){
      array.push((array[ i - 1 ] + array [ i - 2 ]) % 1234567) 
      console.log(array)
    }
  return  array[array.length-1] 
}

// 예산

// 문제 설명
// S사에서는 각 부서에 필요한 물품을 지원해 주기 위해 부서별로 물품을 구매하는데 필요한 금액을 조사했습니다. 
// 그러나, 전체 예산이 정해져 있기 때문에 모든 부서의 물품을 구매해 줄 수는 없습니다. 
// 그래서 최대한 많은 부서의 물품을 구매해 줄 수 있도록 하려고 합니다.

// 물품을 구매해 줄 때는 각 부서가 신청한 금액만큼을 모두 지원해 줘야 합니다. 
// 예를 들어 1,000원을 신청한 부서에는 정확히 1,000원을 지원해야 하며, 1,000원보다 적은 금액을 지원해 줄 수는 없습니다.

// 부서별로 신청한 금액이 들어있는 배열 d와 예산 budget이 매개변수로 주어질 때, 
// 최대 몇 개의 부서에 물품을 지원할 수 있는지 return 하도록 solution 함수를 완성해주세요.

// 제한사항
// d는 부서별로 신청한 금액이 들어있는 배열이며, 길이(전체 부서의 개수)는 1 이상 100 이하입니다.
// d의 각 원소는 부서별로 신청한 금액을 나타내며, 부서별 신청 금액은 1 이상 100,000 이하의 자연수입니다.
// budget은 예산을 나타내며, 1 이상 10,000,000 이하의 자연수입니다.

.001 //Filter
function solution(d, budget) {
  const answer = d.sort( (a, b) => a - b )
                  .filter( money => {
                      // 총 예산에서 지원금 차감
                      budget -= money;
                      
                      if( budget >= 0 ) {
                          return money;
                      }
                  })
  return answer.length;
}

.002 //for
function solution(d, budget) {
  let answer = 0;
  
  // 모든 부서가 신청한 지원금에 따라 오름차순
  d.sort( (a, b) => a - b );
  
  // 부서들이 신청한 금액의 총 합
  let sum = 0;
  for( let i = 0; i < d.length; i++ ) {
      sum += d[i];
      
      if( sum <= budget ) {
          answer++;
      }
  }
  return answer;
}

const arr = ['a','b','c','d']

arr[arr.length -1]

at 은 뒤에서 참조만 해올수 있는 메서드이다.
arr.at(-1) // 'd'



.001
function solution(board, moves) {
  let answer = 0;
  const bucket = [] // 뽑은 이형들이 담겨지는 배열
  
  // 1. 크레인이 이동하는 위치값을 구하는 반복문
  for(let i = 0; i < moves.length; i++){
      // 2. 크레인이 이동해서 뽑아올 수 있는 인형의 위치값을 구하는 반복문
      for(let j = 0; j < board.length; j++){
          const doll = board[j][moves[i] - 1]
          
          
          // 3. 크레인이 이동하는 위치가 빈칸이 아니라면(인형이 있다면)
          if(doll !== 0 ){
              // 4. 뽑은 인형의 위치를 빈칸으로 만들어준다.
              board[j][moves[i] - 1] = 0;
              // 바구니에 인형을 넣으려고 할 때,
              // 바구니의 맨 위에 있는 인형과 현재 넣으려는 인형이 같다면, 바구니 맨 위의 인형을 제거 
              // if(doll === bucket[bucekt.length - 1]){
               if(doll === bucket.at(-1)){
                  bucket.pop()
                  answer += 2
                  break;
              }
              
              // 5. 바구니에 뽑은 인형을 담아준다.
              bucket.push(doll)
              // 한 번 인형을 뽑았다면, 같은 위치에 대한 크레인의 동작을 종료
              break;
          }
      }
  }
  return answer
  console.log(answer)
}

.002
function solution(board, moves) {
  let answer = 0;
  const bucket = []
  
  moves.forEach((moves) => {
      // 반복문을 정지된것 처럼 보이게 해줄 변수
      // false일 때만 forEach 내부 로직이 동작하도록
      let pick = false;
      board.forEach(( location ) => {
          const doll = location[moves  - 1]
          if(pick === false){
              if(doll !== 0){
                  location[moves - 1] = 0;
                  
                  if( doll === bucket.at(-1)) {
                      bucket.pop()
                      answer += 2
                  } else{
                      bucket.push(doll)
                  }
              
               
              
                  pick = true 
              }   
          }
      })
  })
  return answer
}