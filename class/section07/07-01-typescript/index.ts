// 타입 추론
let aaa = "안녕하세요!"
// aaa = 3

// 타입 명시
let bbb:string = "반갑습니다"
// bbb = 10

// 타입 명시가 필요한 상황 => 서로 다른 타입을 동시에 사용할 때!
let ccc: number | string = 1000
ccc = "1000원"

// 숫자 타입
let ddd: number = 10
// ddd = "철수"

// boolean 타입
let eee: boolean = true
// eee = "철수"
eee = false
// eee = "false" // true 로 작동함

//거짓을 나타낸는 것 
0
""
NaN
null
undefined

//참을 나타내는 것
1
-1
" "  //==> 문자열 안에 하나라도 들어가있는경우 공백포함 
"false"  // 참 왜냐 문자열안에 들어갔기 때문!

//배열타입
let fff:number[] = [1,2,3];
let ggg:string[] = ["철수", "영희", "훈이", "10"]
let hhh: ( string | number )[] = ["철수", "영희", "훈이", 10] // 여기는 () 생략 불가

//객체타입
interface IProfile {
    name : string
    age : number | string
    school : string
    hobby? : string   // ?는 있다가 없어도 되는 메서드 
}

const profile: IProfile = {
    name : "철수",
    age: 8,
    school : "다람주초등학교"
}
profile.name = "훈이" //타입추론으로는 이것만 가능
profile.age = "8살" // 못바꾼다 이미 숫자열이기 때문에 스트링형식으로 재할당 하지 못한다.하지만 interface 추가해주면 가능!
profile.hobby = "수영" 

// function type
//인자 안에는 any(타입추론이 되지 않는 것)이기 때문에 타입명시를 해줘야 한다!
// 함수타입 ==> 어디서 몇번이든 호출가능하므로 타입추론 할수 없음! 반드시 타입명시 필요
function add(num1:number, num2:number, unit:string){
    return num1 + num2 + unit
}

const result = add(1000, 2000, "원") // 결과의 리턴 타입도 예측 가능!!!
add(1000, 2000, "원")

const add2 = (num1:number, num2:number, unit:string) => {
    return num1 + num2 + unit
}

const result2 = add(1000, 2000, "원")

//any 타입 (자바스크립트와 동일!) 가급적이면 사용 하지 말것.
let qqq:any = "철수"
qqq = 123
qqq = true
qqq = []