//1.이메일 정상인지 확인 
export function checkEmail(email){
    if(email.includes('@')===false || email === undefined){
    console.log("에러 발생!!! 이메일 주소를 제대로 입력해 주세요!!!");
        return false;
    } else{
        return true;
    }
}

//2.주민 번호 정상인지 확인
export function checkHyphen(qqq){
    if(qqq[6] !== "-"){
        console.log("에러 발생!!! 형식이 올바르지 않습니다!!!");
        return false;
    } else {
        return true;
    }
}

export function checkLength(regNumber){
    const frontNum = regNumber.slice(0,6);
    const endNum = regNumber.slice(7);

    if (frontNum !== 6 || endNum !== 7){
        console.log("에러 발생!! 개수를 제대로 입력해주세요.");
        return;
    }
}

export function customRegistrationNumber(customerNum) {
    const isHyphen = checkHyphen(customerNum);
    if (isHyphen === false) return;
  
    const myNumber = checkLength(customerNum);
    console.log(myNumber);
    return myNumber;
  }

//3.휴대폰 번호 정상인지 확인

export function checkPhoneNumber(myphone){
    if(myphone.length < 11 || myphone.length > 12){
        console.log("에러 발생!! 번호를 제대로 입력해주세요.");
        return false;
    } else {
        return true;
    }
}

// 4.사이트 주소가 정상인지 확인
export function checkSite(email){
    if(email.includes('@')===false || www === undefined){
    console.log("에러 발생!!! 이메일 주소를 제대로 입력해 주세요!!!");
        return false;
    } else{
        return true;
    }
}

//5.회원가입 환영 템플릿 만들기

export function getWelcomeTemplate({ name, email, regNumber, phone, favSite }) {
    const one = phone.slice(0,3);
    const two = phone.slice(3,7);
    const three = phone.slice(7);
    const phoneHyphen = `${one}-${two}-${three}`; 

    const first = regNumber.slice(0,6);
    const second = regNumber.slice(7);
    const regNumberMasking = `${first}-${second}******`;

    const myTemplate = `
            <html>
                <body>
                    <h1>${name}님 가입을 환영합니다.</h1>
                    <hr />
                    <div>이메일: ${email}</div>
                    <div>주민번호: ${regNumberMasking}</div>
                    <div>휴대폰 번호: ${phoneHyphen}</div>
                    <div>내가 좋아하는 사이트: ${favSite}</div>
                </body>
            </html>
        `;

  return myTemplate; 
}

export function sendTemplateToEmail(myEmail, result) {
    console.log(myEmail + "이메일로 가입환영템플릿 " + result + "를 전송합니다.");
  }