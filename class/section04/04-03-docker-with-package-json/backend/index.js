
//  -----옛날 코드 ----- =>commonjs 방식
// const express = require('express')

// -----요즘 코드 ------ =>module 방식
import express from 'express'
import {checkPhone,getToken,sendTokenToSMS} from './phone.js' // export 가져오기
import {checkEmail, getWelcomeTemplate, sendTemplateToEmail } from './email.js';
//Export 에서 중괄호가 없는것은  export default를 가져온다.
// export default function(){}
// default 기본값으로 정해져 있다. import 뒤에 아무 함수나 적어도 기본으로 적용된다

// export default  와 export 같이 쓰기
// import qqqqqq, {checkPhone,getToken,sendTokenToSMS} from './phone.js'

// 중괄호 안 함수 이름 바꾸기  Str as ""
// import {checkPhone as zzzz} from './phone.js' 

//export 일괄적으로 다 가져오는 법
// import * as ttt from './phone.js'
// ttt.checkPhone
// ttt.getToken
// ttt.sendTokenToSMS
import * as dotenv from 'dotenv'
dotenv.config()
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';
import { options } from './swagger/config.js';
import cors from 'cors'



const app = express()
app.use(express.json())
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJsdoc(options)));
app.use(cors())
// get방식의 API를 만들겠다

app.get('/boards', function (req, res) {
  // 1.DB에 접속후, 데이터를 조회 => 데이터베이스 조회했다고 가정.
  const result = [
    { number: 1, writer: "cho", title: "제목입니다", contents: "내용이에요!" },
    { number: 2, writer: "jo", title: "바보입니다", contents: "바보에요!" },
    { number: 3, writer: "hyun", title: "주현입니다", contents: "주현이에요!" }
  ]
  
  // 2.DB에서 꺼내온 결과를 브라우저에 응답(response) 주기 
  
  res.send(result)
}, function(req,res){

})






app.post('/boards', function (req, res) {
  // 1. 브라우저에서 보내준 데이터 확인하기
  console.log(req);
  console.log("==============");
  console.log(req.body);

  // 2. DB에 접속 후 , 데이터를 저장 => 데이터 저장했다고 가정.
  
  // 3. DB에 저장된 결과를 브라우저에 응답(response) 주기
  res.send('게시물 등록에 성공 하였습니다.')
})

app.post("/tokens/phone", function(req, res){
  
  // post body 만들기 (내가한거)
  // req.body.qqq
  // console.log(req.body);
   //1.구조분해 할당
  // const {myphone} = req.body;
   //2.다른 방법
  // const myphone = req.body[myphone]; 

  // post body 만들기 (멘토님이 한거)
  const myphone = req.body.qqq

  
  // 1. 휴대폰 번호 자릿수 맞는지 확인하기 (10~11자리)
  const isValid = checkPhone(myphone)
  if(isValid ===  false){
      return
  }

 // 2. 휴대폰 인증번호 6자리 생성
  const mytoken = getToken()

 // 3. 번호에 인증번호(토큰) 전송하기
  sendTokenToSMS(myphone, mytoken)

  res.send("인증완료")
})

app.post("/users", function (req,res){
  // const name = req.body.name
  // const age = req.body.age
  // const school = req.body.school
  // const email = req.body.email
  // 구조분해 할당하기
  const { name, age, school, email} = req.body

    //1.이메일 정상인지 확인(1.존재여부 2.@여부있는지)
    const isValid = checkEmail(email)
    if(isValid === false)
        return
    
    //2.가입환영 템플릿 만들기
    const myTemplate = getWelcomeTemplate({name, age, school , email})
    //3.이메일에 가입환영 템플릿 전송하기
    sendTemplateToEmail(email, myTemplate)  
    res.send("가입완료")
})

// 3000 => 포트번호 listen = 기다린다(포스트맨에서 샌드버튼 누르는것을 기다린다) 
app.listen(4000)