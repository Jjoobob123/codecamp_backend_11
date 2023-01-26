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

const mymonster1 = new Monster(20)
mymonster1.attack()
mymonster1.run()

const mymonster2 = new Monster(50)
mymonster2.attack()
mymonster2.run()