
// 1번 문제
// const name = '주현';
// console.log(name);

// // 2번 문제
// let name = '주현';
// name = '철수'
// console.log(name);

// 3번 문제
// const fruits = ['사과', '바나나', '파인애플'];
// console.log(fruits);

// const fruits = [];
// fruits.push('사과','바나나','파인애플')
// console.log(fruits);

// 004. 배열의 기능
// const fruits = ['사과', '바나나', '파인애플'];
// const newFruits = [];
// newFruits.push(fruits[fruits.length-1])
// console.log(newFruits);

// 005. 배열의 기능
// let students = ["철수", "영희", "훈이", "짱구", "유리"]
// let newArr = students.slice(0,3);
// console.log(newArr);

// 006. 배열의 기능
// let fruits = ["사과", "바나나"]
// for(let i = 0; i < fruits.length; i++){
//     console.log("맛있는 " + fruits[i]);
// };

// 007. 문자열 배열
// const number = "01012345678"
// let arr = []
// arr.push(number.slice(0,3))
// arr.push(number.slice(3,7))
// arr.push(number.slice(7,11))
// console.log(arr);

// 008. 객체의 선언과 할당
// const student = {};
// student.name = '철수';
// console.log(student);

// 009. 객체의 키&값 추가

// const student = {
// 	name: "철수",
// 	age: 8,
// };

// const school = {
// 	name: "다람쥐초등학교",
// 	teacher: "다람이",
// }

// student.school = school;
// console.log(student);

// 010. 객체의 키&값 삭제
// let student = {
// 	name: "철수",
// 	drink: "사이다"
// };

// delete student.drink
// console.log(student);

// 011. 객체와 배열의 값
// const classmates = [
// 	{
// 		name: "철수",
// 		age: 8,
// 		school: "다람쥐초등학교"
// 	},
// 	{
// 		name: "영희",
// 		age: 8,
// 		school: "토끼초등학교"
// 	},
// 	{
// 		name: "짱구",
// 		age: 8,
// 		school: "다람쥐초등학교"
// 	}
// ];

// classmates[1].school = "다람쥐초등학교";
// console.log(classmates);

// 018. 조건문 연습
// function boolean(input1, input2) {
// 	if(input1 === false && input2 === false) {
//         return false;
//   } else if(input1 === true || input2 === true){
//         return true;
//   }
// };
// console.log(boolean);

// //019.홀짝
// function evenOdd(num){
// 	if(num % 2===0){
//     	console.log("Even");
//     }else if(num % 2 ===1){
//     	console.log("Odd");
//     }else if(num ===0){
//     	console.log("Zero");
//     }   
// }

// evenOdd(0)

// //020. 온도
// function temperature(num){
// 	if(num <= 18) {
//         console.log("조금 춥네요");
// 	} else if (num >= 19 || num <= 23){
//         console.log("날씨가 좋네요");
//     }else if(num >= 24){
//         console.log("조금 덥습니다");
//     }
// }

// 021. 며칠

// 1.방법
// function days(month) {
// 	if(month === 4 || month === 6 || month === 8 || month === 10 || month === 12) {
//         console.log("30일");
//   } else if (month ===2){
//     console.log("28일");
//   } else if (month === 1 || month === 3 ||month === 5 || month === 7 || month === 9){
//     console.log("31일");
//   }
// }

// 2.방법
// const monthList = {
//     1: 31,
//     2: 28,
//     3: 31,
//     4: 30,
//     5: 31,
//     6: 30,
//     7: 31,
//     8: 31,
//     9: 30,
//     10: 31,
//     11: 30,
//     12: 31,
//   };
  
//   function days(month) {
//     return monthList[month];
//   };
  
//   days(1)
//   days(2)
//   days(3)
  
//   days(4)


// days(6)

// 022.미니계산기
// function calculator(num1, num2, operator){
    
//     let result = 0;
// 	if (operator === "+") {
// 		result = num1 + num2;

// 	} else if(operator ==="-") {
// 		result = num1 - num2;

// 	}else if(operator ==="*") {
// 		result = num1 * num2;

// 	}else if(operator ==="/") {
// 		result = num1 / num2;

// 	} else if(operator !== "*","-","/","+") {
// 		console.log("올바른 입력 값이 아닙니다.")
//         return
// 	}
    
//     console.log(result);
// }

// calculator(10, 5, "/")

// 023.숫자더하기
// function sum(num){
//     let sum = 0;
//     for(let i = 1; i <= num; i++)
//     sum += i;
//     console.log(sum);
// }

// sum(5);

// // 024. 특정 문자열 세기

// function countLetter(str) {
//     let count = 0
//     for (let i=0; i< str.length; i++){
//         if(str[i] === "a" || str[i] ==="A" ){
//             count++
//         }
//     }
//     console.log(count);
// }
    
// countLetter("i am from Korea AAAAA")

// 025. 문자열 삽입
// function makeNumber(num) {
// 	let str = '';
//     for(let i = 1 ; i <= num; i++){
//         str = str + i
//         if(i !== num){
//             str = str + '-'
//         }
//     }
//     console.log(str);
// }

// makeNumber(5) // 1-2-3-4-5
// makeNumber(7)

// 026. 홀수 문자열

// function makeOdd(num){ 
// 	let str = '';
//     for(let i = 1; i <= num; i++){
//         if(i%2 === 1){
//             str = str + i;
//         }
//     }
//     console.log(str);
// }



// makeOdd(5) // "135"
// makeOdd(7) // "1357"

// 027. 가장 큰 수 찾기

// function bigNum(str) {
// 	// let biggest = Number(str[0]);
//     // for( let i = 0; i < str.length ; i++){
//     //     if(Number(str[i]) > biggest){
//     //         biggest = Number(str[i])
//     //     }
//     // }
//     // return String(biggest);
//     // console.log(String(biggest));
//  또 다른 방법
//     str = str.split("");
//     return Math.max(...str);
//     console.log(Math.max(...str));
// }


// // 실무에서 사용하는 메서드 
// // Math.max(1,2,3,4,5,6);



// bigNum("12345") // 5
// bigNum("87135") // 8

//주민번호 마스킹 하는 법

// const regNumber = "210510-1010101";


// const replaceRegNumber = function (regNumber) {
//   const count = regNumber.length - 6;
//   const replacedRegNumber = regNumber.slice(0, count) + "******";
//   return replacedRegNumber;
// };
// console.log(replaceRegNumber(regNumber))

// 028.random 숫자 만들기

// function random() {
//     let number = 50
//     return Math.floor(Math.random*(101-1))+1;
//     if(number < 50){
//       console.log(Win)
//     }else if(number >50){
//       console.log(Lose)
//     }
    
//   }

// 029. 나누기 함수 만들기

// 41,43
// 041.조건문 실전 적용 - 점수에 따른 등급 
// function grade(score) {
//     if(score > 100 || score < 0 ){
//         return "잘못된 입력입니다.";
//     } else if (score >= 90){
//         return "A"
//     } else if (score >= 80){
//         return "B"
//     } else if (score >= 70){
//         return "C"
//     } else if (score >= 60){
//         return "D"
//     } else if (score <= 59){
//         return "F"
//     }
//     result;    
// }

function grade(score) {
    let answer = "";
    if(score > 100 || score < 0 ){
        answer = "잘못된 점수입니다";
    } 
    if (90 <= score ){
        answer = "a"
    } else if(80 <= score){
        answer = 'b'
    } else if(70 <= score){
        answer = 'c'
    } else if(60 <= score){
        answer = 'd'
    } else {
        answer = 'f'
    }
    // return answer;
    
    console.log(answer);
}




grade(105)  // "잘못된 점수입니다"
grade(-10)  // "잘못된 점수입니다"
grade(97)   // "A"
grade(86)   // "B"
grade(75)   // "C"
grade(66)   // "D"
grade(52)   // "F"

// 043. 마이페이지