function qqq(aaa){
    console.log(aaa);
    console.log(aaa.name);
    console.log(aaa.age);
    console.log(aaa.school);
}




const name = "철수"
const age = 12
const school = "다람쥐초등학교"

// const profile = {
//     name: name,
//     age: age,
//     school: school
// }

const profile = {name, age, school}  //key 와 value 가 같아서, value를 생략함 >> shorthand-property


qqq(profile) //1,변수에 담아서 보내주기
qqq({name, age, school}) //2,그냥 통째로 전달인자를 보내주기
                         // 결과는 1.2번 동일


