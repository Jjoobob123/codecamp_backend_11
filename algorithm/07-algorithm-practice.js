// 구명 보트
// 문제 설명
// 무인도에 갇힌 사람들을 구명보트를 이용하여 구출하려고 합니다.
// 구명보트는 작아서 한 번에 최대 2명씩 밖에 탈 수 없고, 무게 제한도 있습니다.

// 예를 들어, 사람들의 몸무게가 [70kg, 50kg, 80kg, 50kg]이고
// 구명보트의 무게 제한이 100kg이라면 2번째 사람과 4번째 사람은 같이 탈 수 있지만
// 1번째 사람과 3번째 사람의 무게의 합은 150kg이므로 구명보트의 무게 제한을 초과하여 같이 탈 수 없습니다.

// 구명보트를 최대한 적게 사용하여 모든 사람을 구출하려고 합니다.

// 사람들의 몸무게를 담은 배열 people과 구명보트의 무게 제한 limit가 매개변수로 주어질 때,
// 모든 사람을 구출하기 위해 필요한 구명보트 개수의 최솟값을 return 하도록 solution 함수를 작성해주세요.

0.001;
function solution(people, limit) {
  // 무게 제한 100, 사람 최대 2명
  let answer = 0;
  people.sort((a, b) => a - b);
  let lt = 0;
  let rt = people.length - 1;

  while (lt < rt) {
    if (people[lt] + people[rt] > limit) rt--;
    else {
      rt--;
      lt++;
      // console.log(rt, lt)
    }
    answer++;
    // console.log(answer)
  }
  if (lt === rt) answer++;
  return answer;
}

// 오픈채팅방

0.001;
function solution(record) {
  record = record.map((el) => el.split(" "));

  // 유저들의 최종 닉네임 값을 저장
  const user = record.reduce((acc, cur) => {
    const [action, uid, nickname] = cur;
    if (nickname) acc[uid] = nickname;
    return acc;
  }, {});
  // console.log(user)
  const answer = record.reduce((acc, cur) => {
    const [action, uid] = cur;
    if (action !== "Change") {
      acc.push(
        `${user[uid]}님이 ` +
          (action === "Leave" ? "나갔습니다." : "들어왔습니다.")
      );
    }
    return acc;
  }, []);

  return answer;
}

0.002;
function solution(record) {
  const answer = [];

  const user = {}; // 유저들의 최종 닉네입 값을 저장
  for (let i = 0; i < record.length; i++) {
    const [action, uid, nickname] = record[i].split(" ");

    if (nickname) {
      user[uid] = nickname;
    }
    if (action !== "Change") {
      answer.push({ action, uid });
    }
  }
  for (let idx in answer) {
    answer[idx] =
      user[answer[idx].uid] +
      (answer[idx].action === "Enter"
        ? "님이 들어왔습니다."
        : "님이 나갔습니다.");
  }
  return answer;
}

// 유클리드 호재법
const solutuon = (n, m) => {
  const gcd = (a, b) => {
    console.log(a, b);
    if (b === 0) return a; // 나누어지면 a 리턴
    return gcd(b, a % b); // 나누어지지 않는다면 b와 a%b를 다시 나눈다
  };
  // console.log( gcd (n,m) )
  const lcm = (a, b) => (a * b) / gcd(a, b); // 두 수의 곱을 최대공약수로 나눈다.
  return console.log(
    `최대 공약수는? ${gcd(n, m)}, 최대 공배수는? ${lcm(n, m)}`
  );
};
solutuon(10, 6);

// 유클리드 호재법
//   function callback(n, m) { // 유클리드 호제법
//   let a = n
//   let b = m

//   while (b !== 0){
//     let temp = a%b
//     a = b
//     b = temp
//     // console.log(temp)
//   }
//     console.log(a)
//   return (n*m)/a
// }

// callback(10,6)

//프린터 프로그래머스

// function solution(priorities, location) {
//     // 내가 요청한 문서 인덱스 위치에 있는 값 가져오기
//     const origin = priorities[location]
//     // 인덱스 위치에 있는 값을 문자로 치환하기
//     priorities[location] = 'a'

//     let answer = 0;
//     while(true) {
//         const search = priorities.indexOf('a')
//         console.log( search ,priorities.indexOf('a'))
//         // 중요도를 넣어준다.
//         priorities[search] = origin
//         const max = Math.max(...priorities)

//         priorities[search] = 'a'

//         if(priorities[0] === 'a'){
//             if(origin === max){
//              answer++
//                 return answer
//             }
//         }

//         if(priorities[0] === max){
//             priorities.shift()
//             answer++;
//         }else {
//             priorities.push(priorities[0])
//             priorities.shift()
//         }
//     }

// }

// function solution(priorities, location){
//   const origin = priorities[location]
//   priorities[location] - 'a'

//   const recursion = (count) => {
//         const search = priorities.indexOf('a')
//         // 중요도를 넣어준다.
//         priorities[search] = origin
//         const max = Math.max(...priorities)

//         priorities[search] = 'a'

//         if(priorities[0] === 'a' && origin === max){
//           return ++count
//         }

//         priorities[0] === max ? count++ : priorities.push(priorities)
//         priorities.shift()

//         return recursion(count)
//   }
//   return recursion(0)
// }
