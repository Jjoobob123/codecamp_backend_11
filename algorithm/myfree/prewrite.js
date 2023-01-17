

app.post("", function(req,res){
    const myphone = req.body.qqq

    // 1.휴대폰 번호 자릿수 맞는지 확인
    const isValid = checkPhone(myphone)
    if(isValid === false){
        return
    }

    // 2.휴대폰 인증번호 6자리 생성
    const mytoken = getToken()

    // 3.번호에 인증번호(토크) 생성하기
    sendTokenToSMS(mytoken, myphone)

    res.send("인증완료")
})

app.post("", function(req,res){
    const {name, age, school, email} = req.body

    // 1.이메일이 정상인지 확인
    const isValid = checkEmail(email)
    if(isValid === false){
        return
    }

    // 2.가입환영 템플릿 만들기
    const myTemplate = getWelcomeTemplate({name, age, school, email})

    // 3.이메일 가입환영 템플릿 전송하기
    sendTemplateEmail(email, myTemplate)
    res.send("가입완료")
})