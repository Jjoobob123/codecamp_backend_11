// 신고 결과 받기
0.001;
function solution(id_list, report, k) {
  // const a = id_list.join(",")
  // const b = report.join(",")
  //   console.log(a,'@@@@',b)
  const reporter = {}; // 신고한 사람이 대상으로 삼은 사람이 누구인지
  const reportedList = {}; // 신고 당한 사람의 누적 신고량
  answer = [];
  // console.log(report)
  report = [...new Set(report)];
  // console.log(report)

  for (let i = 0; i < report.length; i++) {
    const info = report[i].split(" ");

    if (reporter[info[0]] === undefined) {
      reporter[info[0]] = [];
    }
    if (reportedList[info[1]] === undefined) {
      reportedList[info[1]] = 0;
    }
    // 중복 신고 제거
    // 같은 유저에 대한 신고 이력이있는지 체크
    // if(reporter[info[0]].includes(info[1])===false){
    reporter[info[0]].push(info[1]);
    reportedList[info[1]]++;
    // }
  }

  for (let i = 0; i < id_list.length; i++) {
    const arr = reporter[id_list[i]] || [];
    answer[i] = 0;

    for (let j = 0; j < arr.length; j++) {
      // console.log(arr[j],reportedList[arr[j]])
      if (reportedList[arr[j]] >= k) {
        answer[i]++;
      }
    }
  }

  return answer;
  // console.log(reporter,reportedList)
}

solution(
  ["muzi", "frodo", "apeach", "neo"],
  ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"],
  2
);

// solution(["con", "ryan"],["ryan con", "ryan con", "ryan con", "ryan con"],3)

0.002;
function solution(id_list, report, k) {
  // const a = id_list.join(",")
  // const b = report.join(",")
  //   console.log(a,'@@@@',b)
  const reporter = {}; // 신고한 사람이 대상으로 삼은 사람이 누구인지
  const reportedList = {}; // 신고 당한 사람의 누적 신고량
  report = [...new Set(report)];

  report.forEach((el) => {
    el = el.split(" ");

    if (reporter[el[0]] === undefined) reporter[el[0]] = [];
    if (reportedList[el[1]] === undefined) reportedList[el[1]] = 0;

    reporter[el[0]].push(el[1]);
    reportedList[el[1]]++;
  });
  // console.log(reporter, reportedList)
  const answer = id_list.map((id) => {
    const arr = reporter[id] || [];

    return arr.reduce((acc, cur) => {
      return acc + (reportedList[cur] >= k ? 1 : 0);
    }, 0);
  });
  return answer;
}

// 32일차

// 프로그래머스 팀에서는 기능 개선 작업을 수행 중입니다.
// 각 기능은 진도가 100%일 때 서비스에 반영할 수 있습니다.

// 또,
// 각 기능의 개발속도는 모두 다르기 때문에 뒤에 있는 기능이 앞에 있는 기능보다 먼저 개발될 수 있고,
// 이때 뒤에 있는 기능은 앞에 있는 기능이 배포될 때 함께 배포됩니다.

// 먼저 배포되어야 하는 순서대로 작업의 진도가 적힌 정수 배열 progresses와 각 작업의 개발 속도가 적힌
// 정수 배열 speeds가 주어질 때 각 배포마다 몇 개의 기능이 배포되는지를 return 하도록 solution 함수를 완성하세요.

0.001;
function solution(progresses, speeds) {
  const answer = [];
  let day = 0;
  for (let i = 0; i < progresses.length; i++) {
    // 100 완성까찌 몇일이 걸리는지
    const process = Math.ceil((100 - progresses[i]) / speeds[i]);

    if (day < process) {
      day = process;
      answer[answer.length] = 1;
    } else if (day >= process) {
      answer[answer.length - 1]++;
    }
    // console.log(day,process,answer)
  }
  return answer;
}

0.002;
function solution(progresses, speeds) {
  var answer = [];

  while (speeds.length > 0) {
    // 개발
    for (let i in speeds) {
      if (progresses[i] < 100) {
        progresses[i] += speeds[i];
      }
    }

    // 배포
    let deploy_count = 0;
    while (progresses[0] >= 100) {
      progresses.shift();
      speeds.shift();
      deploy_count++;
    }
    if (deploy_count > 0) {
      answer.push(deploy_count);
    }
  }

  return answer;
}

0.003;
function solution(progresses, speeds) {
  let day = 0;

  const answer = progresses.reduce((acc, cur, i) => {
    const process = Math.ceil((100 - cur) / speeds[i]);
    console.log(cur, process);

    if (process > day) {
      day = process;
      acc[acc.length] = 1;
    } else {
      acc[acc.length - 1]++;
    }
    return acc;
  }, []);
  return answer;
}

// 35일차
// 영어 끝말잇기

0.001;
const permission = "zxcvbnmasdfghjklqwertyuiop1234567890-_.";
function solution(new_id) {
  // 1단계: 대문자를 소문자로 치환
  new_id = new_id.toLowerCase();

  // 2단계: 소문자,숫자,마이너스,밑줄,마침표를 제외한 모든 문자 제거
  let answer = "";
  for (let i = 0; i < new_id.length; i++) {
    if (permission.includes(new_id[i])) {
      answer += new_id[i];
    }
  }
  // 3단계: 마침표가 두번 이상 연속되는 경우 하나의 마침표로 치환
  while (answer.includes("..")) {
    answer = answer.replace("..", ".");
  }

  // 4단계: 마침표가 처음이나 끝에 위치한다면 제거
  if (answer[0] === ".") {
    answer = answer.slice(1);
  }

  const removeLastDot = function () {
    if (answer.at(-1) === ".") {
      answer = answer.slice(0, answer.length - 1);
    }
  };
  removeLastDot();
  // 5단계: 빈 문자열이라면, 'a'를 대입
  if (answer === "") {
    answer = "a";
  }

  // 6단계: 길이가 16이상이면 ,15의 길이를 만들어준다.
  // 제거 후, 마침표가 끝에 있다면 다시 제거
  if (answer.length >= 16) {
    answer = answer.slice(0, 15);
    removeLastDot();
  }

  // 7단계: 문자열의 길이가 2이하라면, 길이 3이될때까지 마지막 글자를 반복해서 추가
  if (answer.length <= 2) {
    answer = answer.padEnd(3, answer.at(-1));
  }
  return answer;
}

0.002;
const permission = "zxcvbnmasdfghjklqwertyuiop1234567890-_.";
function solution(new_id) {
  // 1단계: 대문자를 소문자로 치환
  new_id = new_id.toLowerCase().split("");

  // 2단계: 소문자,숫자,마이너스,밑줄,마침표를 제외한 모든 문자 제거
  let answer = new_id.filter((str) => {
    return permission.includes(str);
  });
  // 3단계: 마침표가 두번 이상 연속되는 경우 하나의 마침표로 치환
  answer = answer.filter((str, i) => {
    return str !== "." || (str === "." && answer[i + 1] !== ".");
  });
  // ?????

  // 4단계: 마침표가 처음이나 끝에 위치한다면 제거
  if (answer[0] === ".") {
    answer.splice(0, 1);
  }

  // ?????
  const removeLastDot = function () {
    if (answer[answer.length - 1] === ".") {
      answer.splice(answer.length - 1, 1);
    }
  };
  removeLastDot();

  // 5단계: 빈 문자열이라면, 'a'를 대입
  if (answer.length === 0) {
    answer = ["a"];
  }

  // 6단계: 길이가 16이상이면 ,15의 길이를 만들어준다.
  // 제거 후, 마침표가 끝에 있다면 다시 제거
  if (answer.length >= 16) {
    answer = answer.slice(0, 15);
    removeLastDot();
  }

  // 7단계: 문자열의 길이가 2이하라면, 길이 3이될때까지 마지막 글자를 반복해서 추가
  if (answer.length <= 2) {
    const add = new Array(3 - answer.length).fill(answer.at(-1));
    answer = answer.concat(add); // answer = [...answer, ...add]
  }
  return answer.join("");
}
