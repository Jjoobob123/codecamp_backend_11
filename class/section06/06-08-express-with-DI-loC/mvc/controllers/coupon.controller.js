// import { CashService } from "./services/cash.service.js"

export class CouponController{
    
    cashService;
    pointService

    constructor(cashService, pointService){
        this.cashService = cashService
        this.pointService = pointService
    }
    
    buyCoupon = (req,res) => {
        // 1. 가진돈 검증하는 코드
        // const cashService = new CashService()
        const hasMoney = this.cashService.checkValue() 
        const hasMoney2 = this.pointService.checkValue() 

        // 2. 상품권 구매하는 코드
        if(hasMoney){
            res.send("상품권 구매 완료!!")
        } 

    }
}