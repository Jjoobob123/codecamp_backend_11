import { CanActivate, ExecutionContext } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

//class를 객체 안에 합칠수 있음
const DYNAMIC_AUTH_GUARD = {
  // class 부모 클래스는 익명 클래스로 생략가능
  // 이 자체가 function이기 때문에 뒤에 () 붙여야 한다. 그래야 인자를 불러올수 있다.
  google: new (class extends AuthGuard('google') {})(),
  kakao: new (class extends AuthGuard('google') {})(),
  naver: new (class extends AuthGuard('google') {})(),
};

export class DynamicAuthGuard implements CanActivate {
  canActivate(context: ExecutionContext) {
    const { social } = context.switchToHttp().getRequest().params;
    return DYNAMIC_AUTH_GUARD[social].canActivate(context);
  }
}
