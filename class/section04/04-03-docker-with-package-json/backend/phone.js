import coolsms from "coolsms-node-sdk"
const mysms = coolsms.default

export function checkPhone(myphone){
    if(myphone.length < 10 || myphone.length > 11){
        console.log("에러 발생 !! 핸드폰 번호를 제대로 입력해주세요 !!!"); // early-exit 
        return false
    } else {
        return true
    }
}

export function getToken(){
    const result = String(Math.floor(Math.random() * 1000000)).padStart(6, "0")
    console.log(result);
    return result
}

export async function sendTokenToSMS(myphone, result){
    // const SMS_KEY = process.env.SMS_KEY;
    // const SMS_SECRET = process.env.SMS_SECRET;
    // const SMS_SENDER = process.env.SMS_SENDER;
    
    
    // const messageService = new mysms("SMS_KEY", "SMS_SECRET")
    const res = await messageService.sendOne({
        to: myphone,
        from: process.env.SMS_SENDER,
        text:`[코드캠프] 안녕하세요?! 요청하신 인증번호는 ${result}입니다!`
    })

    // console.log(myphone + "번호로 인증번호 " + result + "를 전송합니다.");

}
// API를 실행했다.


// createTokenOfPhone("01012345678") // 0101234567: 인자(argument)


// export default function(){}
// default 기본값으로 정해져 있다. import 뒤에 아무 함수나 적어도 기본으로 적용된다