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

// 002
// String형 배열 seoul의 element중 "Kim"의 위치 x를 찾아, "김서방은 x에 있다"는 String을 반환하는 함수, solution을 완성하세요. seoul에 "Kim"은 오직 한 번만 나타나며 잘못된 값이 입력되는 경우는 없습니다.

// 제한 사항
// seoul은 길이 1 이상, 1000 이하인 배열입니다.
// seoul의 원소는 길이 1 이상, 20 이하인 문자열입니다.
// "Kim"은 반드시 seoul 안에 포함되어 있습니다.

// function solution(seoul) {
//     let x = 0; // 김서방의 위치 (인덱스) 값을 저장
   
//     for( let i = 0; i < seoul.length; i++ ) {
//         if( seoul[i] === "Kim" ) {
//             x = i;
//                         break;
//         }
//     }

//    return `김서방은 ${x}에 있다`
// }


// 003
// 문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요. 예를 들어 s가 "a234"이면 False를 리턴하고 "1234"라면 True를 리턴하면 됩니다.

// 제한 사항
// s는 길이 1 이상, 길이 8 이하인 문자열입니다.
// s는 영문 알파벳 대소문자 또는 0부터 9까지 숫자로 이루어져 있습니다.

// function solution(s) {
//     if( s.length !== 4 && s.length !== 6 ) {
//         return false
//     }
    
//     for( let i = 0; i < s.length; i++ ) {
//         if( Number.isNaN( Number(s[i]) ) ) {
//             return false;
//         }
//     }
//     return true;
// }

// 8일차
// 001.
// 문제 설명
// 자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return 하는 solution 함수를 만들어 주세요.
// 예를들어 N = 123이면 1 + 2 + 3 = 6을 return 하면 됩니다.

// 제한사항
// N의 범위 : 100,000,000 이하의 자연수

// function solution(n){
//     let answer = 0;
//     n = String(n)
    
// 1번 풀이
//     for(let i =0; i < n.length; i++){
//         // answer = answer + n[i]
//         answer += Number(n[i])
//     }
//     return answer
//     console.log(answer)
// }
// 2번 풀이
// function solution(n){
//     const answer = String(n).split("").reduce((acc,cur) => {
//         return acc + Number(cur) },0)
    
//         return answer
// }
// 뒤에 0을 추가하면 문자열이 숫자열로 반환할수 있다.




// console.log(123); //6
// console.log(987); //24


// 002.
// 문제 설명
// 함수 solution은 정수 x와 자연수 n을 입력 받아, 
// x부터 시작해 x씩 증가하는 숫자를 n개 지니는 리스트를 리턴해야 합니다.
// 다음 제한 조건을 보고, 조건을 만족하는 함수, solution을 완성해주세요.

// 1번 풀이
// function solution(x, n) {
//     var answer = [];
//     for(let i = 1; i<= n; i++){
//         answer.push(x*i)}
//     return answer;
// }

// 2번 풀이
// function solution(x, n) {
//     var answer = new Array(n).fill(1)
//                 .map((num, i)=>{
//                     return (i+num) * x
//                 })
//     return answer
//     console.log(answer)

    
// }

// console.log(2,5); //[2,4,6,8,10]


// 003.
// 문자열 s에 나타나는 문자를 큰것부터 작은 순으로 정렬해 새로운 문자열을 리턴하는 함수, solution을 완성해주세요.
// s는 영문 대소문자로만 구성되어 있으며, 대문자는 소문자보다 작은 것으로 간주합니다.

// 1번 풀이
// function solution(s) {
//     return s.split("").sort().reverse().join("")
// }

// 2번 풀이
// function solution(s) {
//     const answer = [];
    
//     for(let i = 0; i < s.length; i++){
//         answer.push(s[i])
//     }
    
//     answer.sort((a,b)=> {return a > b ? -1 : 1})
    
//     return answer.join("")
// }

// 3번 풀이
// function solution(s) {
//     const answer = s.split("").sort((a,b) => {return a > b ? -1: 1}).join("")
// }

// console.log("Zbcdefg"); // "gfedcbZ"

// 004.
// 배열 array의 i번째 숫자부터 j번째 숫자까지 자르고 정렬했을 때, k번째에 있는 수를 구하려 합니다.

// 예를 들어 array가 [1, 5, 2, 6, 3, 7, 4], i = 2, j = 5, k = 3이라면

// array의 2번째부터 5번째까지 자르면 [5, 2, 6, 3]입니다.
// 1에서 나온 배열을 정렬하면 [2, 3, 5, 6]입니다.
// 2에서 나온 배열의 3번째 숫자는 5입니다.
// 배열 array, [i, j, k]를 원소로 가진 2차원 배열 commands가 매개변수로 주어질 때, 
// commands의 모든 원소에 대해 앞서 설명한 연산을 적용했을 때 나온 결과를 배열에 담아 return 하도록 solution 함수를 작성해주세요.

// 1번 풀이
// function solution(array, commands) {
//     const answer = [];
    
//     for(let idx = 0;idx < commands.length; idx++){
       
//         const i = commands[idx][0];
//         const j = commands[idx][1];
//         const k = commands[idx][2];
//         const result = array.slice(i-1,j).sort((a,b) => {return a - b})
        
//         answer.push(result[k-1])
        
//     }
//     console.log(answer)
//     return answer
// }

// 2번 풀이 
// function solution(array, commands) {
//     const answer = commands.map((el) => {
//         const result = array.slice(el[0]-1,el[1]).sort((a, b) =>{
//             return a - b
//         })
//         return result[el[2]-1]
        
        
//     })
//     return answer
// }


// array	                            commands	             return
// [1, 5, 2, 6, 3, 7, 4]	[[2, 5, 3], [4, 4, 1], [1, 7, 3]]	[5, 6, 3]