// // public, private, protected, readonly




// class Monster2 {

//     // power = 10
  
//     // public, private, protected, readonly 중 1개라도 있으면  변수랑 변수 할당이 생략이 가능하다.(8,12줄꺼)
//     constructor(private readonly power){
//         // this.power1 = power
//     }
    
//     // 안에서 접근만 가능하고 모든거 수정 불가!
//     attack1 = () => {
//         console.log("공격하자!!!");
//         console.log("내 공격력은" + this.power + "야"); 
//         this.power =30 // 안에서 수정 불가 
//     }
// }

// // 상속패턴을 써줄떄는 extends을 붙여준다!
// class 공중몬스터2 extends Monster2{

//     attack2 = () => {
//         console.log("공격하자!!!");
//         console.log("내 공격력은" + this.power + "야"); 
//         this.power =30 
//     }
// }

// const mymonster22 = new 공중몬스터2(20)
// mymonster22.attack1()
// mymonster22.attack2()
// console.log(mymonster22.power); 
// mymonster22.power = 10 
