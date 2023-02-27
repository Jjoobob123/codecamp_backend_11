// 1.문자/숫자/불린 기본타입
const getPrimitive = (arg1: string, arg2: number, arg3: boolean): [boolean, number, string] => {
  return [arg3, arg2, arg1];
};

const result1 = getPrimitive("철수", 123, true);
getPrimitive(result1);

//
//
// 2. any 타입(자바스크립트와 동일)
const getAny = (arg1: any, arg2: any, arg3: any): [any, any, any] => {
  console.log(arg1 + 100); // any 는 아무거나 다 됨!
  return [arg3, arg2, arg1];
};

const result2 = getAny("철수", 123, true);

//
//
// 3. unknown 타입
const getUnknown = (arg1: unknown, arg2: unknown, arg3: unknown): [unknown, unknown, unknown] => {
  if (typeof arg1 === "number") console.log(arg1 + 100); // any 보다는 안전
  return [arg3, arg2, arg1];
};

const result3 = getUnknown("철수", 123, true);

//
//
// 4-1. generic 타입(들어오는 타입에 따라서 MyType이 설정된다.)
function getGeneric<MyType1, MyType2, MyType3>(arg1: MyType1, arg2: MyType2, arg3: MyType3): [MyType3, MyType2, MyType1] {
  return [arg3, arg2, arg1];
}

const result4 = getGeneric("철수", 123, true);

//
//
// 4-2. generic 타입(들어오는 타입을 고정시키기 위해서는 아규먼트에 <> 추가 해줘야한다.)
function getGeneric2<MyType1, MyType2, MyType3>(arg1: MyType1, arg2: MyType2, arg3: MyType3): [MyType3, MyType2, MyType1] {
  return [arg3, arg2, arg1];
}

const result5 = getGeneric2<string, number, boolean>("철수", 123, true);

//
//
// 4-3. generic 타입
function forRoot<T1, T2, T3>(arg1: T1, arg2: T2, arg3: T3): [T3, T2, T1] {
  return [arg3, arg2, arg1];
}

const result6 = forRoot("철수", 123, true);

//
//
// 4-4. generic 타입
function getGeneric4<T, U, V>(arg1: T, arg2: U, arg3: V): [V, U, T] {
  return [arg3, arg2, arg1];
}
const result7 = getGeneric4<string, number, boolean>("철수", 123, true);

//
//
// 4-5. generic 타입 - 4 (화살표 함수 사용)
const getGeneric5 = <T, U, V>(arg1: T, arg2: U, arg3: V): [V, U, T] => {
  return [arg3, arg2, arg1];
};
const result8 = getGeneric5<string, number, boolean>("철수", 123, true);
