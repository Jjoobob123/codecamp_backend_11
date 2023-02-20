// 3진법 뒤집기
// 문제 설명
// 자연수 n이 매개변수로 주어집니다. n을 3진법 상에서 앞뒤로 뒤집은 후,
// 이를 다시 10진법으로 표현한 수를 return 하도록 solution 함수를 완성해주세요.

0.001;

// 진법 바꾸는 방법
let num = 10;
// toString 메서드는 n진법으로 바꿔주는 메서드이다
num.toString(3); // '101'

// 10진법으로 바꾸는 방법
parseInt(num, 3); // 10  ==>기존에 3진법으로 쓰인 num을 다시 10진법으로 변환

function solution(n) {
  // 1. 3진법으로 변환해주기
  n = n.toString(3);
  // 2. 앞 뒤 반전
  let reverse = ""; // 문자열로 바꿔준다.
  for (let i = n.length - 1; i >= 0; i--) {
    reverse += n[i];
  }
  // 3. 3진법으로 변환된 데이터를 10진법으로 변환
  return parseInt(reserve, 3);
}

0.002;

function solution(n) {
  n = n
    .toString(3)
    .split("") //3진법으로 변환후 배열로 만들어준다.
    .reverse() //reverse함수는 배열 함수기 떄문에 배열로 변환해준다.
    .join(""); //다시 문자열 형태로 바꿔주기 위해 join 함수 써준다.

  return parseInt(n, 3);
}

// 이진 변환 반복하기
// 문제 설명
// 0과 1로 이루어진 어떤 문자열 x에 대한 이진 변환을 다음과 같이 정의합니다.

// x의 모든 0을 제거합니다.
// x의 길이를 c라고 하면, x를 "c를 2진법으로 표현한 문자열"로 바꿉니다.
// 예를 들어, x = "0111010"이라면, x에 이진 변환을 가하면
// x = "0111010" -> "1111" -> "100" 이 됩니다.

// 0과 1로 이루어진 문자열 s가 매개변수로 주어집니다.
// s가 "1"이 될 때까지 계속해서 s에 이진 변환을 가했을 때,
// 이진 변환의 횟수와 변환 과정에서 제거된 모든 0의 개수를 각각 배열에 담아
// return 하도록 solution 함수를 완성해주세요.

0.001;
function solution(s) {
  let count = 0; // 변환 횟수
  let remove = 0; // 제거된 0의 개수

  while (s !== "1") {
    count++; //변환 횟수 === 반복 횟수
    // 1. 모든 0을 제거
    let temp = "";
    for (let i = 0; i < s.length; i++) {
      if (s[i] === "0") {
        // 참조해온 요소가 '0'인 경우를 찾는다.
        remove++;
      } else {
        // 문자열 '1'만 들어온다
        temp += s[i];
      }
    }
    s = temp.length; // 결과가 문자열 '1'이 아니라면 , 다시 반복
    s = s.toString(2); // 결과가 '1' 이라면 반복은 종료
  }

  return [count, remove];
}

// recursion function(재귀함수)
// // 1. 설정된 값이 구해질 때까지 무한 실행 (whilea문 재체 가능)
// // 2. 실행한 함수 내부에서 스스로를 다시 호출

// const recursion = (num) => {
//     if(num ===3){
//         return num
//     }
//     num --;
//     return recursion(num)
// }

// // recursion(10) => recursion(9) => recursion(8) => recursion(7) => ... recursion(3)

// const result rescursion(10)

0.002;
function solution(s) {
  // recursion 함수 (재귀함수)
  function recursion(s, [count, remove]) {
    if (s === "1") {
      return [count, remove];
    }
    count++;
    remove += s.split("").filter((el) => el === "0").length;
    s = s.split("").filter((el) => el === "1").length;
    s = s.toString(2);

    return recursion(s, [count, remove]);
  }
  return recursion(s, [0, 0]); // [count, remove]
}

26일차//

.01
// 비밀지도
// 네오는 평소 프로도가 비상금을 숨겨놓는 장소를 알려줄 비밀지도를 손에 넣었다. 
// 그런데 이 비밀지도는 숫자로 암호화되어 있어 위치를 확인하기 위해서는 암호를 해독해야 한다. 
// 다행히 지도 암호를 해독할 방법을 적어놓은 메모도 함께 발견했다.

// 지도는 한 변의 길이가 n인 정사각형 배열 형태로, 각 칸은 "공백"(" ") 또는 "벽"("#") 두 종류로 이루어져 있다.
// 전체 지도는 두 장의 지도를 겹쳐서 얻을 수 있다. 각각 "지도 1"과 "지도 2"라고 하자. 
// 지도 1 또는 지도 2 중 어느 하나라도 벽인 부분은 전체 지도에서도 벽이다.
// 지도 1과 지도 2에서 모두 공백인 부분은 전체 지도에서도 공백이다.
// "지도 1"과 "지도 2"는 각각 정수 배열로 암호화되어 있다.
// 암호화된 배열은 지도의 각 가로줄에서 벽 부분을 1, 
// 공백 부분을 0으로 부호화했을 때 얻어지는 이진수에 해당하는 값의 배열이다.

.001

function solution(n, arr1, arr2) {
  let answer = []
  let map1 = 0;
  let map2 = 0;
  for(let i = 0; i < n ; i++ ){
      // console.log(arr1[i],arr2[i])
      map1 = arr1[i].toString(2)
      map2 = arr2[i].toString(2)
      console.log(map1,map2)
  }for(let j = 0; j < n ; j++ )
  if(map1[j] === '1'){
      console.log(map1[j])
      map
      // map1.push['#']
      
  }
}

function solution(n, arr1, arr2) {
  const answer = []

  for(let i =0; i< arr1.length; i++){
      // undefined 를 막아주기 위해 빈 문자열을 만들어준다.
      answer[i] = '';
      
      // 지도1의 암호를 2진법으로 변환
      const map1 = arr1[i].toString(2).padStart(n,"0")
      // 지도2의 암호를 2진법으로 변환 
      const map2 = arr2[i].toString(2).padStart(n,"0")
      // console.log(map1,map2)
      for(let j =0; j < map1.length; j++){
          // 벽이 되는 경우부터 체크 '#'
          if(map1[j] === '1' || map2[j] ==='1'){
              // 둘 중 하나라도 벽일 때는 전체 지도에서 벽 
              answer[i] += '#'
          } else {
              // 두 개 모두 공백인 경우 ('0'이라면)
              answer[i] += ' '
          }
      }
  }
  return answer
  
}

.001-2

function solution(n, arr1, arr2) {
  const answer = arr1.map(( map1, i ) =>{
      // 지도1의 암호를 2진법으로 변환
      map1 = map1.toString(2).padStart(n,'0')
      // 지도2의 암호를 2진법으로 변환 
      const map2 = arr2[i].toString(2).padStart(n,'0')
      
      return map1.split('').reduce((acc,cur,j) => {
          return acc + (cur === '1' || map2[j] === '1'
                        ? '#' : ' '
                       )
                          
      },'')
  })
  // console.log(answer)
  return answer
}

// 28일차

.001
// 다트게임 
// 카카오톡 게임별의 하반기 신규 서비스로 다트 게임을 출시하기로 했다. 
// 다트 게임은 다트판에 다트를 세 차례 던져 그 점수의 합계로 실력을 겨루는 게임으로, 모두가 간단히 즐길 수 있다.
// 갓 입사한 무지는 코딩 실력을 인정받아 게임의 핵심 부분인 점수 계산 로직을 맡게 되었다. 
// 다트 게임의 점수 계산 로직은 아래와 같다.

// 다트 게임은 총 3번의 기회로 구성된다.
// 각 기회마다 얻을 수 있는 점수는 0점에서 10점까지이다.
// 점수와 함께 Single(S), Double(D), Triple(T) 영역이 존재하고 
// 각 영역 당첨 시 점수에서 1제곱, 2제곱, 3제곱 (점수1 , 점수2 , 점수3 )으로 계산된다.
// 옵션으로 스타상(*) , 아차상(#)이 존재하며 스타상(*) 
// 당첨 시 해당 점수와 바로 전에 얻은 점수를 각 2배로 만든다. 아차상(#) 당첨 시 해당 점수는 마이너스된다.
// 스타상(*)은 첫 번째 기회에서도 나올 수 있다. 
// 이 경우 첫 번째 스타상(*)의 점수만 2배가 된다. (예제 4번 참고)
// 스타상(*)의 효과는 다른 스타상(*)의 효과와 중첩될 수 있다.
//  이 경우 중첩된 스타상(*) 점수는 4배가 된다. (예제 4번 참고)
// 스타상(*)의 효과는 아차상(#)의 효과와 중첩될 수 있다. 
// 이 경우 중첩된 아차상(#)의 점수는 -2배가 된다. (예제 5번 참고)
// Single(S), Double(D), Triple(T)은 점수마다 하나씩 존재한다.
// 스타상(*), 아차상(#)은 점수마다 둘 중 하나만 존재할 수 있으며, 존재하지 않을 수도 있다.
// 0~10의 정수와 문자 S, D, T, *, #로 구성된 문자열이 입력될 시 총점수를 반환하는 함수를 작성하라.

.001-1


const bonus = [ "S", "D", "T" ] // 보너스를 체크하기 위한 배열
const option = [ "*", "#" ] // 옵션을 체크하기 위한 배열

function solution(dartResult) {
    const answer = [];
    
    let score = ""; // 점수만 뽑아서 저장하는 변수
    for( let i = 0; i < dartResult.length; i++ ) {
        if( isNaN( dartResult[i] ) === false ) {
            // 숫자 타입으로 변환한 데이터가 NaN 값이 아닌 경우 ( => 숫자인 경우 )
            score += dartResult[i]
        } else {
            score = Number(score)
            // 숫자 타입으로 변환한 데이터가 NaN 값인 경우 ( => 숫자가 아닌 경우 )
            if( bonus.includes( dartResult[i] ) ) {
                if( dartResult[i] === "D" ) {
                    // score = score ** 2 // 2제곱
                    score = Math.pow( score, 2 )
                } else if( dartResult[i] === "T" ) {
                    // score = score ** 3 // 3제곱
                    score = Math.pow( score, 3 )
                }
                answer.push( score );
                score = "";
            } else if( option.includes( dartResult[i] ) ) {
                // 옵션이 있는 경우
                if( dartResult[i] === "#" ) {
                    // 아차상일 경우 : 해당 점수를 마이너스 한다.
                    answer[ answer.length - 1 ] *= -1
                } else {
                    // 스타상일 경우 : 해당 점수에 2를 곱한다.
                    answer[ answer.length - 1 ] *= 2
                    
                    // 현재 게임이 2번째 게임 이상인 경우에만
                    if( answer.length > 1 ) {
                        // 앞에 있는 점수까지 2를 곱한다.
                        answer[ answer.length - 2 ] *= 2
                    }
                }
            }
        }
    }
    
    return answer.reduce(( acc, cur ) => acc + cur)
}
