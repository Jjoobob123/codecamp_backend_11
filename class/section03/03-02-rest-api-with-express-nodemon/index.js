//  -----옛날 코드 ----- =>commonjs 방식
// const express = require('express')

// -----요즘 코드 ------ =>module 방식
import express from 'express'

const app = express()

// get방식의 API를 만들겠다
app.get('/qqq', function (req, res) {
  res.send('Hello World')
})



// 3000 => 포트번호 listen = 기다린다(포스트맨에서 샌드버튼 누르는것을 기다린다) 
app.listen(3000)

const obj = {

  name: "duwls",
  age: 12,
}

app.express()

객체가 조금 더 큰 의미 
인스턴스를 객체가 포함
왜 이게 이렇게 불리냐면

new data