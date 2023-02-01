interface IProfile {
  name: string;
  age: number;
  school: string;
  hobby?: string;
}

//1. Partial 타입 (부분:있어도 되고 없어도 되는)
type aaa = Partial<IProfile>;

//2. Required 타입 (필수사항)
type bbb = Required<IProfile>;

//3. Pick 타입 (원하는 속성만 뽑아서 사용하고 싶을 때)
type ccc = Pick<IProfile, "name" | "age">;

//4. Omit 타입 (원하는 속성 제거하여 사용하고 싶을ㄷ 때 )
type ddd = Omit<IProfile, "school">;

//5. Record 타입
type eee = "철수" | "영희" | "훈이"; // Union 타입
let child1: eee = "철수"; // 철수,영희,훈이만 됨
let child2: string = "사과"; // 철수 영희 훈이 사과 바나나 다됨

type fff = Record<eee, IProfile>; // Record 타입

//6.객체의 키들로 Union 타입 만들기
type ggg = keyof IProfile; // "name" | "age" | "school" | "hobby"의 Union타입을 만들어줌
let myprofile: ggg = "hobby";

//7. type vs interface 차이  => interface는 선언병합 가능
interface IProfile {
  candy: number; // 선언병합으로 추가됨
}

// 8.배운것 응용
let profile: Partial<IProfile> = {
  candy: 10,
};
