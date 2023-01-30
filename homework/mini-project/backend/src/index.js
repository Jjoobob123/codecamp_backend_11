// 라이브러리 import 먼저 해주기
import express  from "express";
const app = express()
app.use(express.json())

import swaggerJsdoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'
import { options } from "./swagger/config.js";
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJsdoc(options)));
 
import mongoose from 'mongoose'

import cors from 'cors'
app.use(cors())

import * as dotenv from 'dotenv'
dotenv.config()

import axios from 'axios' 

import cheerio from 'cheerio'; 

import { Token } from './models/token.model.js'
import { User } from './models/user.model.js'

import { checkPhone, getToken, sendTokenToSMS } from "./phone.js";
import { checkEmail, getWelcomeTemplate, sendTemplateToEmail } from './email.js'

// 회원가입 API 보내주기
app.post('/users', async (req,res) => {
    // 1.브라우저에서 보내준 데이터 확인하기.
    
    let { name,personal,phone,prefer,email,pwd} = req.body

    // 1. 이메일이 정상인지 확인(1-존재여부, 2-"@" 포함여부)
    const isValid = checkEmail(email);
    if (isValid === false) return;

    phone = phone.split("-").join("")
    personal = personal.split("-")[0]+"-*******"
    console.log(phone,personal);
    
    // 2. 가입환영 템플릿 만들기
    const myTemplate = getWelcomeTemplate({name, prefer, phone} );
    // 좋아하는 사이트 cheerio 활용하여 스크래핑
    const url = prefer

    const preferSite = await axios.get(url)
    // 받아온 데이터를 cheerio에 넘겨준다.
    const og = {}
    const $ = cheerio.load(preferSite.data)
    $("meta").each((i, el) => {
        if($(el).attr("property") && $(el).attr("property").includes("og:")){
            const key = $(el).attr("property")
            const value = $(el).attr("content")
            console.log(key, value);
            

            // og 객체가 들어갈수 있도록 만들어주기!
            if(key.includes("title"))og["title"]=value
            else if(key.includes("description"))og["description"]=value;
            else if(key.includes("image"))og["image"]=value
            return og


            // if(key.includes("title") || key.includes("description") || key.includes("image")){
            //     res.send("메타 태그 정보 확인 완료!!!")
            // }
        } 
    })  
    console.log(og); 
    await new User({ name ,
                     email ,
                     personal ,
                     prefer ,
                     pwd ,
                     phone,
                     og }).save()
    
    const userPhone = await Token.findOne({phone}) 
    
    // 휴대폰 번호 오류 뜨게 하기
    if(userPhone === null || userPhone.isAuth === false){
        res.status(422).send('에러!! 핸드폰 번호가 인증되지 않았습니다.') 
    } 

    // 3. 이메일에 가입환영 템플릿 전송하기
    sendTemplateToEmail( myTemplate, email );
 
    res.send('가입완료!');
    
})

// DB에 저장된 User 데이터의 목록을 응답으로 보내주세요. 
app.get("/users", async (req,res) =>{
    const users = await User.find({})
    res.send(users)
     

})





app.post("/tokens/phone", async (req,res) => {
  
    const phone = req.body.phone
    // findone({phone},)
    // console.log(phone);

    // 1. 휴대폰 번호 자릿수 맞는지 확인하기 (10~11자리)
    const isValid = checkPhone(phone)
    if(isValid ===  false){
        return
    }
  
   // 2. 휴대폰 인증번호 6자리 생성
    const myToken = getToken()
    

    
    const doc = await Token.findOne({phone})
    doc === null ? new Token({
        token: myToken,
        phone: phone,
        isAuth: false,
    }).save() 
    : await Token.updateOne({phone : phone} , {token : myToken}, {isAuth : false })

//    3. 번호에 인증번호(토큰) 전송하기 (돈이 아까워서 잠시 주석!!!)
    // sendTokenToSMS(phone, myToken)
 
    res.send(`${myToken}인증번호 전송에 성공하셨습니다. `)
})

app.patch("/tokens/phone", async(req, res)=>{ 

    const { phone, token } = req.body
    console.log(phone)
    const doc = await Token.findOne({ phone })
    if(doc === null){
        return res.send("DB에 저장된 정보가 없습니다. false")
    }

    if(doc.token === token){
        console.log(doc.token,token);
        await Token.updateOne({phone},
            {isAuth : true})
            res.send("true")
    }else {
    
        return res.send("인증번호가 일치하지 않습니다. false") 
    }
})

app.post('/users', function (req, res) {
    const { name,  prefer,  phone } = req.body;

    // 1. 이메일이 정상인지 확인(1-존재여부, 2-"@" 포함여부)
    const isValid = checkEmail(email);
    if (isValid === false) return;

    // 2. 가입환영 템플릿 만들기
    const myTemplate = getWelcomeTemplate({name, prefer, phone} );

    // 3. 이메일에 가입환영 템플릿 전송하기
    sendTemplateToEmail( myTemplate, email );

    res.send('가입완료!');
});

mongoose.set('debug', true)

mongoose.connect("mongodb://my-database:27017/mydocker") 
  .then(() => console.log("db접속에 성공하였습니다."))
  .catch(() => console.log("db접속에 실패하였습니다."))


app.listen(4000, ()=>{
    console.log("서버 오픈");
})  