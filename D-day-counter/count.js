const container = document.querySelector("#d-day-container");
const messageContainer = document.querySelector("#d-day-message");
const intervalIdArr = [];
const savedDate = localStorage.getItem("saved-date");

// input 태그에 입력한 값을 날짜 형식으로 변환하여 반환하는 함수
const dateFormMaker = function () {
  const inputYear = document.querySelector("#target-year-input").value;
  const inputMonth = document.querySelector("#target-month-input").value;
  const inputDate = document.querySelector("#target-date-input").value;
  const dateFormat = `${inputYear}-${inputMonth}-${inputDate}`;

  return dateFormat;
};

const counterMaker = function (data) {
  if (data !== savedDate) {
    localStorage.setItem("saved-date", data);
  }

  const nowDate = new Date();
  const targetDate = new Date(data).setHours(0, 0, 0, 0);
  const remaining = (targetDate - nowDate) / 1000;

  if (remaining <= 0) {
    // 현재 날짜 보다 이전 날짜를 입력한 경우
    container.style.display = "none";
    messageContainer.innerHTML = "<h3>이전 날짜를 입력할 수 없습니다.</h3>";
    messageContainer.style.display = "flex";
    setClearInterval();
    return;
  }
  // NaN 값과 같은지 판단하는 경우 isNaN 함수 사용 (=== NaN 은 사용하지 않음)
  else if (isNaN(remaining)) {
    // 입력한 날짜가 유효하지 않은 경우
    container.style.display = "none";
    messageContainer.innerHTML = "<h3>유효한 시간대가 아닙니다.</h3>";
    messageContainer.style.display = "flex";
    setClearInterval();
    return;
  }

  // const remainingDate = Math.floor(remaining / 3600 / 24);
  // const remainingHours = Math.floor((remaining / 3600) % 24);
  // const remainingMin = Math.floor(remaining / 60) % 60;
  // const remainingSec = Math.floor(remaining) % 60;

  const remainingObj = {
    remainingDate: Math.floor(remaining / 3600 / 24),
    remainingHours: Math.floor((remaining / 3600) % 24),
    remainingMin: Math.floor(remaining / 60) % 60,
    remainingSec: Math.floor(remaining) % 60,
  };

  // const days = document.getElementById("days");
  // const hours = document.getElementById("hours");
  // const min = document.getElementById("min");
  // const sec = document.getElementById("sec");

  // const documentObj = {
  //   days: document.getElementById("days"),
  //   hours: document.getElementById("hours"),
  //   min: document.getElementById("min"),
  //   sec: document.getElementById("sec"),
  // };

  // documentObj["days"].textContent = remainingObj.remainingDate;
  // documentObj["hours"].textContent = remainingObj.remainingHours;
  // documentObj["min"].textContent = remainingObj.remainingMin;
  // documentObj["sec"].textContent = remainingObj.remainingSec;

  const timeKeys = Object.keys(remainingObj);
  // const docKeys = Object.keys(documentObj);

  // for (let i = 0; i < timeKeys.length; i++) {
  //   documentObj[docKeys[i]].textContent = remainingObj[timeKeys[i]];
  // }

  // let i = 0;
  // for (let key in documentObj) {
  //   documentObj[key].textContent = remainingObj[timeKeys[i]];
  //   i++;
  // }

  // 텍스트가 출력될 span 태그들의 id 속성 값 배열
  const documentArr = ["days", "hours", "min", "sec"];

  // 텍스트 포맷 설정 함수
  // 함수 안에 함수 정의 가능
  const format = function (time) {
    if (time < 10) {
      return "0" + time;
    } else {
      return time;
    }
  };

  // span 태그들의 텍스트 설정
  let i = 0;
  for (const tag of documentArr) {
    const remainingTime = format(remainingObj[timeKeys[i]]);
    document.getElementById(tag).textContent = remainingTime;
    i++;
  }
};

// 카운트다운 시작 함수
const starter = function (targetDateInput) {
  if (!targetDateInput) {
    // targetDateInput: undefined(falsy)
    // 전달인자 없이 함수를 호출한 경우에 해당함
    targetDateInput = dateFormMaker();
  }

  container.style.display = "flex";
  messageContainer.style.display = "none";

  // 카운터 시작 전에 이전에 진행하던 카운터 모두 종료
  setClearInterval();

  // 카운터 시작
  counterMaker(targetDateInput);
  const intervalId = setInterval(() => {
    counterMaker(targetDateInput);
  }, 1000);

  // setInterval이 반환하는 id 값 저장
  intervalIdArr.push(intervalId);
};

// 카운터 종료 함수
const setClearInterval = function () {
  for (let i = 0; i < intervalIdArr.length; i++) {
    // clearInterval 함수와 id 값을 사용하여 interval 종료
    clearInterval(intervalIdArr[i]);
  }
};

// 카운터 초기화 함수
const resetTimer = function () {
  localStorage.removeItem("saved-date");
  resetStyle();
  setClearInterval();
};

// 초기 화면 설정 함수
const resetStyle = function () {
  const inputIdArr = [
    "target-year-input",
    "target-month-input",
    "target-date-input",
  ];

  for (const id of inputIdArr) {
    document.getElementById(id).value = "";
  }

  container.style.display = "none";
  messageContainer.innerHTML = "<h3>D-Day를 입력해 주세요.</h3>";
  messageContainer.style.display = "flex";
};

// 코드 파싱 과정에서 로컬 저장소에 이미 저장된 savedDate가 있으면 카운터 바로 시작
if (savedDate) {
  // savedDate: truthy
  // console.log(savedDate);
  starter(savedDate);
} else {
  // savedDate: null(falsy)
  // console.log(savedData);
  container.style.display = "none";
  messageContainer.innerHTML = "<h3>D-Day를 입력해 주세요.</h3>";
}