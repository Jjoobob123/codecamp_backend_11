// 1번 휴대폰 번호 자릿수가 맞는지 확인하기 (퍼사드)
function checkPhone(myphone){
if(myphone.length < 10 || myphone.length > 11){
    console.log("에러발생!! 핸드폰 번호를 제대로 입력해주세요!!!");
    return false
}else{
    return true
}
}

// 2번 인증번호 만들기
function getToken(){
    const result = String(Math.floor(Math.random()*1000000)).padStart(6,"0")
    console.log(result);
    return result
}

// 3번 인증번호 휴대폰번호로 전송하기
function sendTokenToSMS(myphone,result){
    console.log(myphone + "번호로 인증번호"+ result + "를 전송합니다");
}
            

function createTokenOfPhone(myphone){
// 1.휴대폰 번호 자릿수 맞는지 확인하기
const isValid = checkPhone(myphone)
if( isValid === false)
return

// 2.인증번호 만들기
const mytoken = getToken()

// 3.인증번호 전송하기
sendTokenToSMS(myphone, mytoken)

}


createTokenOfPhone("01012345678")