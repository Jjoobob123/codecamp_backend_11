import express from 'express'

import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';
import { options } from './swagger/config.js';
import cors from 'cors';

const app = express()
app.use(cors());
app.use(express.json())
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJsdoc(options)));
// get방식의 API를 만들겠다
app.get('/users', function (req, res) {
 
  const result = [
    { 
        email : "aaa@gmail.com", 
        name : "철수",
        phone : "010-1234-5678",
        personal : "220110-2222424",
        prefer : "https://naver.com"

        
    },
    { 
        email : "aaa223@gmail.com", 
        name : "주현",
        phone : "010-1234-8898",
        personal : "220110-2225522",
        prefer : "https://naver.com"
    },
    { 
        email : "aaaddw@gmail.com", 
        name : "태윤",
        phone : "010-1234-7777",
        personal : "220110-2222278",
        prefer : "https://naver.com"
    },
    { 
        email : "aaa22ssa@gmail.com", 
        name : "진겸",
        phone : "010-1234-9098",
        personal : "220110-2222297",
        prefer : "https://naver.com"
    },
    { 
        email : "aaabbgg@gmail.com", 
        name : "예림",
        phone : "010-1234-1256",
        personal : "220110-2222257",
        prefer : "https://naver.com"
    }

  ]
  res.send(result)
}, function(req,res){

})

app.get('/starbucks', function (req, res){
    const result = [
        { name: '원메리카노', kcal: 5 },
        { name: '투메리카노', kcal: 10 },
        { name: '쓰리메리카노', kcal: 15 },
        { name: '포메리카노', kcal: 20 },
        { name: '파이브메리카노', kcal: 25 },
        { name: '식스메리카노', kcal: 30 },
        { name: '세븐메리카노', kcal: 35 },
        { name: '에잇메리카노', kcal: 40 },
        { name: '나인메리카노', kcal: 45 },
        { name: '텐메리카노', kcal: 50 }
    ]
    res.send(result)

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


app.listen(3000);