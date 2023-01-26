function checkEmail(myemail){
    if(myemail === undefined || myemail.includes("@") === false){
        console.log("이메일 형식이 올바르지 않습니다!!!");
        return false
    }else{
        return true
    }
}

function getWelcomeTemplate(){
    const mytemplate = `
        <html>
            <body>
                <h1>${name}님 가입을 환영합니다!!!</h1>
                <hr />
                <div>이름: ${name}</div>
                <div>나이: ${age}</div>
                <div>학교: ${school}</div>
                <div>가입일: ${createdAt}</div>
            </body>
        </html>
    `
    return mytemplate
}

function sendTemplateToEmail(myemail,result){
    console.log(myemail + "이메일로 가입환영템플릿" + result + "전송합니다!");
}


function createUser(){
    // 1.이메일이 정상인지 확인
    const isValid = checkEmail(email)
    if(isValid === false) return 

    // 2. 환영 템플릿 만들기
    const mytemplate = getWelcomeTemplate()

    // 3. 환영 템플릿 전송
    sendTemplateToEmail(email, mytemplate)

}

const name = "철수"
const age = 8
const school = "다람쥐초등학교"
const email = "a@a.com"
const createdAt = "2022-10-02"
createUser({ name, age, school, email, createdAt })