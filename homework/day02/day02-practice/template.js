import {
    checkEmail,
    checkPhoneNumber,
    customRegistrationNumber,
    checkSite,
    getWelcomeTemplate,
    sendTemplateToEmail,
} from './index.js'

//본문
function createUser({name, email, regNumber, phone, favSite }){
    //1.이메일 정상인지 확인(1.존재여부 2.@여부있는지)
    const isValid = checkEmail(email)
    if(isValid === false)
        return;
    
    //2.주민 번호 정상인지 확인
    const isReg = customRegistrationNumber(regNumber);
    if(isReg === false) return;

    //3.휴대폰 번호가 정상인지 확인
    const isPhone = checkPhoneNumber(phone);
    if(isPhone === false) return;

    //4.사이트 주소가 정상인지 확인
    const isSite = checkSite(favSite);
    
    //5.회원가입 환영 템플릿 만들기
    const myTemplate = getWelcomeTemplate({
        name,
        email,
        regNumber,
        phone,
        favSite
    });

    //6.이메일에 가입환영 템플릿 전송하기
    sendTemplateToEmail(email, myTemplate)
}

const name = "코드캠프";
const email = "aaa@fdsffas.com";
const regNumber = "210510-1010101";
const phone = "01012345678";
const favSite = "www.codecamp.com";

createUser({ name, email, regNumber, phone, favSite });