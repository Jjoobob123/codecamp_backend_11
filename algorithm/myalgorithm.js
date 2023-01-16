// 003.
// let fruits = ["사과", "바나나", "파인애플"];

// console.log(fruits) // ["사과", "바나나", "파인애플"]

//004.
// let fruits = ["사과", "바나나", "파인애플"];
// let newFruits = [];
// // newFruits.unshift(fruits[fruits.length-1])
// newFruits.push(fruits[fruits.length-1])



// console.log(newFruits) // ["파인애플"]


// // 005.
// let students = ["철수", "영희", "훈이", "짱구", "유리"]
// let newArr = students.slice(0,3);




// console.log(newArr) // ["철수", "영희", "훈이"]


// 006.
// let fruits = ["사과", "바나나"]

// for(let i = 0; i < fruits.length; i++){

//     console.log("맛있는"+ fruits[i]);
// }
// console.log(fruits) // ["맛있는 사과", "맛있는 바나나"]

// 007.
// const number = "01012345678"

// const arr = [];
// arr.push(number.slice(0,3));
// arr.push(number.slice(3,7));
// arr.push(number.slice(7));

// console.log(arr) // ["010", "1234", "5678"]

// // 008.
// const student = {
//     name: "철수"
// }



// console.log(student) // { name : "철수" }

// 009.
// const student = {
// 	name: "철수",
// 	age: 8,
// };

// const school = {
// 	name: "다람쥐초등학교",
// 	teacher: "다람이",
// }

// student.school = school

// console.log(student) // 
// // 	{
// //     name: '철수',
// //     age: 8,
// //     school: {
// //       name: '다람쥐초등학교',
// //       teacher: '다람이'
// //     }
// //   }

// 010.
// let student = {
// 	name: "철수",
// 	drink: "사이다"
// };

// delete student.drink

// console.log(student) // { name : "철수" }

// 011.
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

// classmates[1].school = "다람쥐초등학교"

// console.log(classmates) // 
// const classmates = [
// 	{
// 		name: "철수",
// 		age: 8,
// 		school: "다람쥐초등학교"
// 	},
// 	{
// 		name: "영희",
// 		age: 8,
// 		school: "다람쥐초등학교"
// 	},
// 	{
// 		name: "짱구",
// 		age: 8,
// 		school: "다람쥐초등학교"
// 	}
// ];

// 013.
// let str = "3"
// let number = 3

// // typeof str;
// // typeof number;

// console.log(typeof str) // string
// console.log(typeof number) // number


// 014.
// let array = []
// let object = {}

// typeof array;
// typeof object;
// Array.isArray(array)

// console.log(typeof array) // object
// console.log(typeof object) // object
// console.log(Array.isArray(array)) // true
// console.log(Array.isArray(object)) // false

// 015.
// let num = 24
// num = String(num)
// let str = num

// console.log(typeof str) // string

//018.
// function boolean(input1, input2) {
// 	if(input1 === false && input2 === false) {
//         return false;
        
//   }else if(input1 === true || input2 === true){
//         return true;
        
//   }
// };

// console.log(boolean(true, false));  // "true" 
// boolean(false, true) // "true"
// boolean(false, false) // "false"

// 019.
// function evenOdd(num) {
// 	if(num%2 === 0) {
//     console.log("Even");
//   }else if (num%2 === 1){
//     console.log("Odd");
//   }else if (num === 0){
//     console.log("Zero");
//   }
// }


// evenOdd(12)  // "Even"
// evenOdd(15) // "Odd"
// evenOdd(0)  // "Zero"

// 020.

// function temperature(num){
// 	if(num < 10 || num > 30) {
//         console.log("기상 오류");
// 	}else if (num <= 18){
//         console.log("조금 춥네요");
//     }else if(num >= 19 || num <=23){
//         console.log("날씨가 좋네요");
//     }else if(num >=24 ){
//         console.log("조금 덥습니다");
//     }
// }

// temperature(13)  // "조금 춥네요"
// temperature(23)  // "날씨가 좋네요"
// temperature(27)
// temperature(31)
// temperature(5)  // "조금 덥습니다"

// 021.

// function days(month) {
// 	if(month%2 === 1) {
//         console.log("31일");
//   }else if(month === 2){
//     console.log("28일");
//   }else if(month%2 === 0 ){
//     console.log("30일");
//   }
// }

// // 1월 : 31일
// // 2월 : 28일
// // 3월 : 31일
// // 4월 : 30일
// // 5월 : 31일
// // 6월 : 30일
// // 7월 : 31일
// // 8월 : 31일
// // 9월 : 30일
// // 10월 : 31일
// // 11월 : 30일
// // 12월 : 31일

// days(1) // 31
// days(2) // 28
// days(4) // 30

// 022.
// function calculator(num1, num2, operator){
// 	if (operator === "+") {
// 		console.log(num1 + num2)
// 	} else if(operator ==="-") {
// 		console.log(num1 - num2)
// 	} else if(operator ==="*"){
//         console.log(num1 * num2);
//     } else if(operator ==="/"){
//         console.log(num1 /  num2);
//     } else if(operator !== "+","-","*","/"){
//         console.log("올바른 입력이 아닙니다.");
//     }
// }

// calculator(10,5, '+')  // 15
// calculator(10,5, '-')  // 5
// calculator(10,5, '*')  // 50
// calculator(10,5, '/')  // 2
// calculator(10,5, 'a')  // "올바른 입력이 아닙니다"

// 023.
// function sum(num) {
// 	let count = 0;
//     for(let i = 1; i <= num; i++)
//     count += i;
//     console.log(count);
// }

// sum(5) // 15
// sum(3) // 6

// 024.
// function countLetter(str) {
// 	let count = 0;
//     for(let i = 0; i < str.length; i ++){
//        if(str[i] === 'a' || str[i] === 'A'){
//         count++
        
//        }
//     }
//     console.log(count);
// }

// countLetter("I am from Korea")                         // 2
// countLetter("A day without laughter is a day wasted.") // 6

// 025.
// function makeNumber(num) {
// 	let str = '';
//     for(let i = 1 ; i <=num; i++){
//         str = str + i
//         if(i !== num){
//         str = str + '-'
//         }
//     }
//     console.log(str);
// }

// makeNumber(5) // 1-2-3-4-5
// makeNumber(7) // 1-2-3-4-5-6-7

// 026.
// function makeOdd(num){
// 	let str = '';
//     for(let i = 1; i <= num; i++){
//         if(i%2 === 1){
//             str = str + i
//         }
//     }
//     console.log(str);
// }

// makeOdd(5) // "135"
// makeOdd(7) // "1357"

// 027.
// function bigNum(str) {
// 	let biggest = 0;
//     for( let i = 0; i < str.length ; i++){
//         if(Number(str[i]) > biggest){
//             biggest = Number(str[i])
//         }
//     }
//     // return String(biggest);
//     console.log(String(biggest));    

// }

// bigNum("12345") // 5
// bigNum("87135") // 8

// 028.
// function random() {
//     let number = 50
//     let fast = Math.floor(Math.random()*101);
//     if(fast > number){
//         console.log("Win");
//     }else if(fast < number){
//         console.log("Lose");
//     }
    
//   }
  
//   random() // Win
//   random() // Lose
  
  

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  

  












































































































































































