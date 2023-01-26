//  -----옛날 코드 ----- =>commonjs 방식
// const express = require('express')

// -----요즘 코드 ------ =>module 방식
import express from 'express'
import { CashService } from './cash.js'
import { ProductService } from './product.js'
const app = express()

// 상품 구매하기 API
app.post('/products/buy', (req, res) => {
  //  1. 가진돈 검증하는 코드 (대략 10줄 => class로 인해 2줄)
  const cashService = new CashService()
  const hasMoney = cashService.checkValue()
  

  //  2. 판매여부 검증하는 코드 (대략 10줄 => class로 인해 2줄)
  const productService = new ProductService()
  const isSoldout = productService.checkSoldOut()
  //  3. 상품 구매하는 코드
  if(hasMoney && !isSoldout ){
    res.send("상품 구매 완료!!")
  }
})

// 상품 환불하기 API
app.post("products/refund", (req,res) => {
  //  1. 판매여부 검증하는 코드 (대략 10줄 => class로 인해 2줄)
  const productService = new ProductService()
  const isSoldout = productService.checkSoldOut()


  //  2. 상품 환불하는 코드
  if(isSoldout){
    res.send("상품 환불 완료!!")
  }
})

app.listen(3000)