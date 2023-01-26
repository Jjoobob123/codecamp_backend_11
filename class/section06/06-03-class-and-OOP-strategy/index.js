class 공중부품 {
    run = () => {
        console.log("날라서 도망쳐!!!");
    }
}

class 지상부품 {
    run = () => {
        console.log("뛰어서 도망쳐!!!");
    }
}

class Monster {
    power = 10
    부품;
    // 생성자 밑에 new monster() 가로에 실행시켜주는 함수
    constructor(qqq){
        this.부품 = qqq
    }

    attack = () => {
        console.log("공격하자!!!");
        console.log("내 공격력은" + this.power + "야");
    }

    run = () => {
        this.부품.run()
    }
}

const aaa = new 공중부품()
const bbb = new 지상부품()

const mymonster1 = new Monster(aaa)
mymonster1.attack()
mymonster1.run()

const mymonster2 = new Monster(bbb)
mymonster2.attack()
mymonster2.run()