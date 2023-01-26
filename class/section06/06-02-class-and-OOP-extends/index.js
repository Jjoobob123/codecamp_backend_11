// class Date {
    
//     qqq = 3
    
//     getFullYear(){
        
//     }
    
//     getMonth(){

//     }
// }


const date = new Date()
console.log(date.getFullYear())
console.log(date.getMonth() + 1)
console.log(date.getDate());
console.log(date.getHours())
console.log(date.getMinutes())


class Monster {
    power = 10

    // 생성자 밑에 new monster() 가로에 실행시켜주는 함수
    constructor(qqq){
        this.power = qqq
    }

    attack = () => {
        console.log("공격하자!!!");
        console.log("내 공격력은" + this.power + "야");
    }

    run = () => {
        console.log("도망쳐!!!");
    }
}

// 상속패턴을 써줄떄는 extends을 붙여준다!
class 공중몬스터 extends Monster{
    // nest.js에서 사용하는 구문
    constructor(aaa){
        super(aaa + 1)
    }
    
    // 오버라이딩(부모의 run을 덮어씀)
    run = () => {
        console.log("날아서 도망쳐!!!");
    }
}

class 지상몬스터 extends Monster{
    // nest.js에서 사용하는 구문
    constructor(bbb){
        super(bbb)
    }
    

    // 오버라이딩(부모의 run을 덮어씀) 
    run = () => {
        console.log("뛰어서 도망쳐!!!");
    }
}

const mymonster1 = new 공중몬스터(20)
mymonster1.attack()
mymonster1.run()

const mymonster2 = new 지상몬스터(50)
mymonster2.attack()
mymonster2.run()