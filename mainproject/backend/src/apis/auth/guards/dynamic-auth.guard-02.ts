import { CanActivate, ExecutionContext } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

class GoogleAuthGuard extends AuthGuard('google') {}
class KaKaoAuthGuard extends AuthGuard('google') {}
class NaverAuthGuard extends AuthGuard('google') {}
// 변하지 않는 상수값은 대문자로 사용
const DYNAMIC_AUTH_GUARD = {
  google: new GoogleAuthGuard(),
  kakao: new KaKaoAuthGuard(),
  naver: new NaverAuthGuard(),
};

export class DynamicAuthGuard implements CanActivate {
  canActivate(context: ExecutionContext) {
    const { social } = context.switchToHttp().getRequest().params;
    return DYNAMIC_AUTH_GUARD[social].canActivate(context);
  }
}
