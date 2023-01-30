


class Car {
    type = "페라리"
    horsepower = 0
    color = "빨강"

    constructor(qqq){
        this.horsepower =qqq

    }

    start = () => {
        console.log(`${this.color} ${this.type}은 ${this.horsepower}로 출발하다`);
    }

    stop = () => {
        console.log(`${this.color} ${this.type}은 ${this.horsepower}로 정지하다`);
    }


}

class 중고차 extends Car{
    constructor(bbb){
        super(bbb)
    }
}

class 신형차 extends Car{
    constructor(bbb){
        super(bbb)      
    }
}

const newCar1 = new 중고차(10)
newCar1.stop()

const newCar2 = new 신형차(20)
newCar2.start()
