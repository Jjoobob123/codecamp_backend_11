function checkEmail(email){
    // if(email.includes("@") === false){
    //     console.log("에러 발생 !! ${email}를 제대로 입력해주세요  !!!"); // early-exit 
    //     return false
    // } else {
    //     return true
    // }
    if(email === undefined || email.includes("@") === false){
        console.log("에러 발생 !! 이메일 주소를 제대로 입력해주세요  !!!");
        return false
    } else {
        return true
    }

}

function getWelcomeTemplate({name, age, school , email, createdAt}){
    const mytemplate = `
        <html>
            <body>
                <h1>${name}님 가입을 환영합니다!!!</h1>
                <hr />
                <div>이름: ${name}</div>
                <div>나이: ${age}</div>
                <div>이메일: ${email}</div>
                <div>학교: ${school}</div>
                <div>가입일: ${createdAt}</div>
            </body>
        </html>
    `
    // console.log(result);
    return mytemplate
}

function sendTemplateToEmail(myemail, result){
    console.log(myemail + "이메일로 가입환영템플릿 " + result + "를 전송합니다.");

}

//본문
function createUser({name, age, school , email, createdAt}){
    //1.이메일 정상인지 확인(1.존재여부 2.@여부있는지)
    const isValid = checkEmail(email)
    if(isValid === false)
        return
    
    //2.가입환영 템플릿 만들기
    const myTemplate = getWelcomeTemplate({name, age, school , email, createdAt})
    //3.이메일에 가입환영 템플릿 전송하기
    sendTemplateToEmail(email, myTemplate)
}


const name = "철수"
const age = 8
const school = "다람쥐초등학교"
const email = "aa.com"
const createdAt = "2023-01-10" 
// new Date()
createUser({name, age, school , email, createdAt})