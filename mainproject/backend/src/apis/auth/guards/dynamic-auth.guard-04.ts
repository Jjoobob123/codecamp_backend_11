import { CanActivate, ExecutionContext } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

// 한번씩 구글 카카오 네이버가 curr값으로 순차적으로 들어온다.
// prev 기준값이 계속 누적되어 들어온다.
const DYNAMIC_AUTH_GUARD = ['google', 'kakao', 'naver'].reduce((prev, curr) => {
  return {
    // prev에 담겨있는 값을 합쳐주기 위해 스프레드 연산자를 쓴다.
    ...prev,
    // curr은 result.key로 되어버리기 때문에 curr은 변수인데 그 변수를 키로 만들고 싶다
    // 그렇다고 []로 감싸준다고 해서 []배열은 아니다.
    // 객체의 키값에는 []로 감싸줘야한다 !!! 중요
    [curr]: new (class extends AuthGuard(curr) {})(),
  };
}, {});

// prev?
// const result =
//
//   [curr]: new (class extends AuthGuard(curr){})()
// }

// map,forEach,reduce 를 써줘서 하나씩 넣어줄수 있다.
// 1단계 빈 객체 생성
// {}

// 2단계 구글만 집어넣는다.
// {
//  google: new (class extends AuthGuard('google') {})(),
// }

// 3단계 카카오 추가
// {
//  google: new (class extends AuthGuard('google') {})(),
//  kakao: new (class extends AuthGuard('google') {})(),
// }

// 4단계 네이버 추가
// {
//  google: new (class extends AuthGuard('google') {})(),
//  kakao: new (class extends AuthGuard('google') {})(),
//  naver: new (class extends AuthGuard('google') {})(),
// }

export class DynamicAuthGuard implements CanActivate {
  canActivate(context: ExecutionContext) {
    const { social } = context.switchToHttp().getRequest().params;
    return DYNAMIC_AUTH_GUARD[social].canActivate(context);
  }
}
