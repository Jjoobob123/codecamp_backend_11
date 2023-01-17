
function checkPhone(myphone){
    if(myphone.length < 10 || myphone.lengh > 11){
        console.log("에러발생 !! 핸드폰 번호를 제대로 입력해주세요 !!!");
        return false
    }else {
        return true
    }
}

function getToken(){
    const result = String(Math.floor(Math.random()*1000000)).padStart(6,"0")
}
