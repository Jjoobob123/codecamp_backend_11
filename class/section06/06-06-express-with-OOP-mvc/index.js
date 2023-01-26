//  -----옛날 코드 ----- =>commonjs 방식
// const express = require('express')

// -----요즘 코드 ------ =>module 방식
import express from 'express'

import { ProductController} from './mvc/controllers/product.controller.js'
const app = express()

// 상품 API
const productController = new ProductController()
app.post('/products/buy', productController.buyProduct) // 상품 구매하기 API
app.post("/products/refund", productController.refundProduct) // 상품 환불하기 API

// 게시판 API
// app.get("/boards/...")

app.listen(3000)