import coolsms from "coolsms-node-sdk"
const mysms = coolsms.default

export function checkPhone(phone){
    if(phone.length < 10 || phone.length > 11){
        console.log("에러 발생 !! 핸드폰 번호를 제대로 입력해주세요 !!!"); // early-exit 
        console.log(phone+"@@@@@");
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

export async function sendTokenToSMS(phone, result){    
    const messageService = new mysms(process.env.SMS_KEY, process.env.SMS_SECRET)
    const res = await messageService.sendOne({
        to: phone,
        from: process.env.SMS_SENDER,
        text:`[코드캠프] 안녕하세요?! 요청하신 인증번호는 ${result}입니다!`
    })
    console.log(phone+"@@@@@")

    // console.log(myphone + "번호로 인증번호 " + result + "를 전송합니다.");

}