
function checkNumber(Num){
    

    if(!Num.includes("-") ){
        console.log("에러 발생 !! 형식이 올바르지 않습니다 !!!"); // early-exit 
        return false
    } else {
        return true
    }
}


function getString(Num){
    if(Num.split("-")[0].length !== 6 || Num.split("-")[1].length !== 7){
        console.log("에러 발생 !! 개수를 제대로 입력해주세요 !!!");
        return false
    } else {
        return true
    }
}

function sendNum(Num){
    let front_number = Num.split("-")[0]

    let before_number = Num.split("-")[1]
    
    let Masking = []

    Masking.push(before_number.split("")[0])
    

    Masking.push("******")


    console.log(`${front_number}-${Masking.join("")}`);

    
}


function registrationNumber(Num){ 
    // 1. 주민등록번호 맞는지 확인하기 (13자리) 개수를 제대로 입력해주세요.
     const isValid = checkNumber(Num)
     if(isValid ===  false){
         return
     }
 
    // 2. 주민등록번호 맞는지 확인하기 (형식) 형식이 올바르지 않습니다.
     const myString = getString(Num)
        if(myString === false){
            return
        }
 
    // 3. 번호에 주민번호 전송하기
     sendNum(Num)
 
     
 }


 registrationNumber("2105101010101010101")