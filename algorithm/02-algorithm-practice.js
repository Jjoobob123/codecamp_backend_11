// function grade(score) {
//     if(score > 100 || score < 0 ){
//         return "잘못된 입력입니다.";
//     } 
//     let answer = "";
//     if (90 <= score )
//         answer = "A"
//      else if(80 <= score)
//         answer = "B"
//      else if(70 <= score)
//         answer = "C"
//      else if(60 <= score)
//         answer = "D"
//      else 
//         answer = "F"
    
//     return answer;
//    //  console.log(answer);
// }




// grade(105)  // "잘못된 점수입니다"
// grade(-10)  // "잘못된 점수입니다"
// grade(97)   // "A"
// grade(86)   // "B"
// grade(75)   // "C"
// grade(66)   // "D"
// grade(52)   // "F"

// 6일차 

// 001.
// 1번 풀이
// function solution(arr)
// {
//     let answer = [];
//     for(let i= 0; i < arr.length; i++){
//       if(arr [i] !== arr[i+1]){
//          answer.push(arr[i])
//       }
//     }
//    console.log(answer);
//     // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
//     console.log('Hello Javascript')
    
//     return answer;
// }
// //  2번 풀이
// function solution(arr)
// {
//     let answer = [];
//     for(let i= 0; i < arr.length; i++){
//       console.log(answer, arr[i])
//         if(answer[answer.length -1] !== arr[i])
//         answer.push(arr[i])
//     }

//     // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    
    
//     return answer;
// }

// 002.
// function solution(num) {
//    var answer = '';
//    if(num%2 === 0){
//        return "Even"
//    }else if(num%2 === 1){
//        return "Odd"
//    }
//    return answer;
// }

// 2번 풀이
// function solution(num) {
//    return num, num % 2 ===0 ?"Even" : "Odd"
// }
// ?뒤에는 true 값, : 뒤에서는 false 값 반환 사막연산자

// 003.
// 1번 풀이
// function solution(arr) {
    
//    return arr.reduce((a, b) => a + b) / arr.length;
// }

// 2번 풀이
// function solution(arr) {
//    var answer = 0;
//    for (let i = 0; i < arr.length; i++) {
//      answer += arr[i];
//    }
//    return answer / arr.length;
//  }

// 3번풀이
// function solution(arr) {
    
//    let sum = 0;
//    for(let i = 0; i<arr.length; i++){
       
//        sum += arr[i]
//    }
//    console.log(sum)
//    return sum / arr.length
   
// }



// 004.
// 1번 풀이
// function solution(phone_number) {
//    let phone = phone_number.length -4;
//    let answer = "*".repeat(phone) + phone_number.slice(-4);

//    return answer;
// }

// // 2번 풀이
// function solution(phone_number) {
//       let answer = '';
//     for(let i =0; i <phone_number.length ; i++){
//         if(i < phone_number.length -4){
//             answer += "*"
//         }else{
//             answer += phone_number[i] 
//         }
        
//     }
//     return answer
// }

// 3번 풀이
// function solution(phone_number) {
//       let answer = '';
//     answer = answer.padStart(phone_number.length -4,"*")
    
//     answer +=  phone_number.slice(phone_number.length -4 )
    
//     console.log(answer)
//     return answer
// }

// 7일차
// 001.
// function solution(s) {
//    var answer = '';
    
//     if (s.length % 2 === 0 ) { // 짝수일 경우,
//         answer = s[s.length / 2 - 1] + s[s.length / 2];
//     } else {
//         answer = s[Math.floor(s.length/2)]; // 홀수일 경우, 반내림 하기
//     }
//     return answer;
// }
