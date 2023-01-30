// 13일차
// .001 없는 숫자 더하기
// 0부터 9까지의 숫자 중 일부가 들어있는 정수 배열 numbers가 매개변수로 주어집니다.
// numbers에서 찾을 수 없는 0부터 9까지의 숫자를 모두 찾아 더한 수를 
// return 하도록 solution 함수를 완성해주세요.

// 1.for문과 조건문
// function solution(numbers) {
//     let answer = 0;
    
//     for(let  i = 1; i <= 9 ; i++){
//         if(numbers.includes(i) === false){
//             answer += i
//         }
//     }
//     console.log(answer)
//     return answer
// }

// 2.메서드
// function solution(numbers) {
//     const answer = new Array(9).fill(1)
//                     .reduce((acc,cur,i)=> {
//                         console.log(acc)
//                         const num = cur + i;
//                         return acc + (numbers.includes(num)
//                                      //배열에 존재한다면 0을 더해준다.
//                                       ? 0
//                                       // 배열에 존재하지 않는다면
//                                       : num
//                                      )
//                     },0)
//     return answer
    
// 002.두 정수 사이의 합
// 두 정수 a, b가 주어졌을 때 a와 b 사이에 속한 모든 정수의 합을 리턴하는 함수, solution을 완성하세요.
// 예를 들어 a = 3, b = 5인 경우, 3 + 4 + 5 = 12이므로 12를 리턴합니다.

// 제한 조건
// a와 b가 같은 경우는 둘 중 아무 수나 리턴하세요.
// a와 b는 -10,000,000 이상 10,000,000 이하인 정수입니다.
// a와 b의 대소관계는 정해져있지 않습니다.
//  => 대소관계가 정해져있지 않단ㄴ 패턴
// 1.for 반복문과 조건문
// function solution(a, b) {
//     let answer = 0;
    
//     if(a === b){
//         return a;
//     }
//     //최솟값
//     //반복문이 실행될 때 설정되는 초깃값 (a와 b중에서 더 작은 수가 들어옵니다.)
//     const start = a > b ? b : a
//     // const start = Math.min(a,b)
    
//     //최댓값
//     //반복문이 종료되는 조건 설정( a와b중에서 더 큰 수가 들어온다.)
//     // const end = Math.max(a,b)
//     const end = a > b ? a : b
    
    
//     for(let i = start; i <= end; i ++ ){
//         answer += i
//     }
//     return answer
// }

// 2.reduce
// function solution(a, b) {
//     if(a === b){
//          return a;
//      }
    
//     const min = Math.min(a,b)
//     const max = Math.max(a,b)
    
//     const answer = new Array(max - min)
//                     .fill(1)
//                     .reduce((acc,cur,i) => {
//                         const sum = ( min + cur ) + i
//                         return acc + sum
//     },min)
//     return answer
// }

// 003.하샤드 수 
// 양의 정수 x가 하샤드 수이려면 x의 자릿수의 합으로 x가 나누어져야 합니다.
// 예를 들어 18의 자릿수 합은 1+8=9이고, 
// 18은 9로 나누어 떨어지므로 18은 하샤드 수입니다. 
// 자연수 x를 입력받아 x가 하샤드 수인지 아닌지 검사하는 함수, 
// solution을 완성해주세요.

// 제한 조건
// x는 1 이상, 10000 이하인 정수입니다.

// 01.for문
// function solution(x) {
//     //각 자릿수의 합을 저장하는 변수
//     let sum = 0;
    
//     // 숫자타입의 X 를 문자열 타입으로 변환
//     x = String( x )
    
//     for(let i = 0; i < x.length; i++){
//        // sum += x[i] //여기서 for문을 해주면 sum의 type은 string이 된다.그러므로
//         sum += Number(x[i])
//     }
//     // 조건식으로 리턴 :  나머지값이 없다면 true 있다면 false
//     return x % sum === 0;
// }

// 02.reduce 
// function solution(x) {
//     const sum = x.toString()
//                 .split('') //reduce는 문자열로는 사용이 불가하여 배열로 만들어준다.
//                 .reduce((acc,cur) => {                
//                     return  Number(acc) + Number(cur) 
//                 })
//     return x % sum ===0
// }

// 14일차
// 001.내적
// 문제 설명
// 길이가 같은 두 1차원 정수 배열 a, b가 매개변수로 주어집니다. a와 b의 내적을 return 하도록 solution 함수를 완성해주세요.

// 이때, a와 b의 내적은 a[0]*b[0] + a[1]*b[1] + ... + a[n-1]*b[n-1] 입니다. (n은 a, b의 길이)

// 01.for 반복문
// function solution(a, b) {
//     let answer = 0
//     for(let i = 0; i < a.length; i ++){
        
//         answer += (a[i]*b[i])
//     }
//     return answer
// }

// 02.메서드
// function solution(a, b) {
//     const answer = a.reduce((acc, cur, i)=>{
//         return acc + (cur* b[i])
//     },0)
//     return answer
// }

// 002.행렬의 덧셈
// 행렬의 덧셈은 행과 열의 크기가 같은 두 행렬의 같은 행,
// 같은 열의 값을 서로 더한 결과가 됩니다.
// 2개의 행렬 arr1과 arr2를 입력받아,
// 행렬 덧셈의 결과를 반환하는 함수,solution을 완성해주세요

// 01.반복문
// 행렬의 형태로 리턴해주고 있다.(이중)
// function solution(arr1, arr2) {
//     const answer = []
//     //1. arr1 배열의 전체 배열들을 가져온다.
//     for( let i =0 ; i < arr1.length; i++){
//         //2. arr1 배열에서 가져온 배열들의 요소를 참조
//         for( let j = 0 ; j < arr1[i].length; j++){
//             // 이중배열을 나란히 해주기 위해 배열안에 숫자열을 뺴오도록 한다.
//             // console.log(arr1[i],arr1[i][j],arr2[i],arr2[i][j
//             // 3. i와 J 인덱스를 활용해 SUM이라는 변수에 합을 저장
//             const sum = arr1[i][j] + arr2[i][j]
//             // 4. i에 해당하는 인덱스에 접근시 배열이 없다면 빈 배열을 생성
//             if(answer[i] === undefined){
//                 answer[i] =[]
//             }
//             // 5. i와 j 인덱스를 활용해 ANSWER의 해당 위치에 데이터 직접 삽입
//             answer[i][j] = sum
            
//         }
//     }
//     // console.log(answer)
//     return answer
// }

//02.메서드
// function solution(arr1, arr2) {
//     const answer = arr1.map((numArr,i)=> {
//         // console.log(numArr,arr2[i])
//         return numArr.map((num,j) => {
//             // console.log(numArr,num,arr2[i])
//             return num + arr2[i][j]
//         })      
//     })
//     console.log(answer)
//     return answer
// }

// 03.진호님 풀이방식
// function solution(arr1, arr2){
//     let answer = []
//     console.log(arr1)
//     console.log(arr1.length)
//     console.log(arr1[0].length)
    
//     for(let i = 0 ; i < arr1.length ; i ++){
//       let temp = []
      
//       for(let j = 0 ; j < arr1[0].length ; j++){
//         temp.push(arr1[i][j]+ arr2[i][j])
//         console.log(temp)
//       }
//       answer.push(temp)
//     }
//     return answer
//   }
  
//   solution([[1,2],[2,3],[4,5]],[[3,4],[5,6],[4,5]])