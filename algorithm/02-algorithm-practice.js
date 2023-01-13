function grade(score) {
    if(score > 100 || score < 0 ){
        return "잘못된 입력입니다.";
    } 
    let answer = "";
    if (90 <= score )
        answer = "A"
     else if(80 <= score)
        answer = "B"
     else if(70 <= score)
        answer = "C"
     else if(60 <= score)
        answer = "D"
     else 
        answer = "F"
    
    return answer;
   //  console.log(answer);
}




grade(105)  // "잘못된 점수입니다"
// grade(-10)  // "잘못된 점수입니다"
// grade(97)   // "A"
// grade(86)   // "B"
// grade(75)   // "C"
// grade(66)   // "D"
// grade(52)   // "F"