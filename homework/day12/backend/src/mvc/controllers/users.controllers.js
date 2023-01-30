// 서비스.js 에서 import 해주기 
import { DatabaseService } from "./services/users.service.js"
import axios from 'axios'
import { User } from '../models/user.model.js'
import cheerio from 'cheerio';
import { Token } from '../models/token.model.js'

// index에서 checkUser export해서 보내주기 
const databaseService = new DatabaseService()
export class UserController{

    CheckDB = async (req,res) => {
        // 1.브라우저에서 보내준 데이터 확인하기.
        console.log("@@@@@@@@@",req.body);
        let { name,personal,phone,prefer,email,pwd} = req.body

        const isValid = databaseService.CheckEmail(email);
        if (isValid === false) return;
    
             
        phone = phone.split("-").join("")
        personal = personal.split("-")[0]+"-*******"
        console.log(phone,personal);
        
        const myTemplate = databaseService.getWelcomeTemplate({name, prefer, phone} );
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
            return res.status(422).send('에러!! 핸드폰 번호가 인증되지 않았습니다.')     
        }  
        
        databaseService.sendTemplateToEmail( myTemplate, email ); 

        res.send('가입완료!'); 
               
    }
    UserList = async (req,res) =>{
        const users = await User.find({})
        res.send(users)
        console.log("@@@@");

    }

} 