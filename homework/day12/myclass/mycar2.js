class myCar {
    kind = "서우"
    eng = "780"
    col = "카키"

    constructor(kind,eng,col){
        this.kind = kind 
        this.eng = eng
        this.col = col
    }
    
    run = () => {
        console.log("출발하기")
        console.log(this.col)
        console.log(`내 자동차는 ${this.col} ${this.kind} 이고, 마력은 ${this.eng} 야.`)
    }

    stop = () => {
        console.log("정지하기")
    }

}

// const myCar1 = new myCar("benz","70","red")
// myCar1.run()
// myCar1.stop()

const myCar2 = new myCar()
myCar2.run()
myCar2.stop()