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



 

import { Token } from './mvc/models/token.model.js'


import { checkPhone, getToken, sendTokenToSMS } from "./phone.js";
// import { checkEmail, getWelcomeTemplate, sendTemplateToEmail } from './email.js'
import { UserController } from '../src/mvc/controllers/users.controllers.js'


// 회원가입 API 보내주기
// class 해서 가져오기 (유지보수를 위해)
const userController =  new UserController() 
app.post('/users', userController.CheckDB)
app.get("/users", userController.UserList)







app.post("/tokens/phone", async (req,res) => {
  


    // 1. 휴대폰 번호 자릿수 맞는지 확인하기 (10~11자리)
    const isValid = checkPhone(phone)
    if(isValid ===  false){
        return
    }
  
   // 2. 휴대폰 인증번호 6자리 생성
    const myToken = getToken()
    console.log("@@@@@@@@@@@@"+myToken);

    
    const doc = await Token.findOne({phone})
    doc === null ? new Token({
        token: myToken,
        phone: phone,
        isAuth: false,
    }).save() 
    : await Token.updateOne({phone : phone} , {token : myToken}, {isAuth : false })

//    3. 번호에 인증번호(토큰) 전송하기 (돈이 아까워서 잠시 주석!!!)
    sendTokenToSMS(phone, myToken)
  
    res.send(`${myToken}인증번호 전송에 성공하셨습니다. `)
  })
   
  app.patch("/tokens/phone", async(req, res)=>{

    const { phone, token } = req.body
    console.log(phone)
    const doc = await Token.findOne({ phone })
    if(doc === null){
        res.send("DB에 저장된 정보가 없습니다. false")
    }

    if(doc.token === token){
        await Token.updateOne({phone},
            {isAuth : true})
            res.send("true")
    }else {
        await Token.updateOne({phone},
            {isAuth : false})
        res.send("인증번호가 일치하지 않습니다. false")
    }
})



mongoose.set('debug', true)

mongoose.connect("mongodb://my-database:27017/mydocker")
  .then(() => console.log("db접속에 성공하였습니다."))
  .catch(() => console.log("db접속에 실패하였습니다."))


app.listen(3000, ()=>{
    console.log("서버 오픈");
}) 