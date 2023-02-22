import { CACHE_MANAGER, Inject, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Cache } from 'cache-manager';
import { Strategy } from 'passport-jwt';

// import {kakaoStrategy} from 'passport-kakao'
// import {NaverStrategy} from 'passport-naver'
// import {GoogleStrategy} from 'passport-google'

export class JwtRefreshStrategy extends PassportStrategy(Strategy, 'refresh') {
  constructor(
    @Inject(CACHE_MANAGER)
    private readonly cacheManager: Cache,
  ) {
    //자식이 부모한테 값을 던져주고 싶을 때 super 함수를 쓴다.
    super({
      //   1. 쿠키 내에 존재하는 함수 만들어주기
      jwtFromRequest: (req) => {
        const cookie = req.headers.cookie; // refreshToken =asdadw
        const refreshToken = cookie.replace('refreshToken=', '');
        return refreshToken;
      },

      secretOrKey: process.env.JWT_REFRESH_KEY,
      passReqToCallback: true,
    });
  }

  // 2. 유저아이디를 받아온 다음 코딩
  async validate(req, payload) {
    console.log(req.headers, '@@@@@@@@@');
    const myRefreshToken = req.headers['cookie'].split('refreshToken=')[1];

    const cache = await this.cacheManager.get(`refreshToken:${myRefreshToken}`);

    console.log('🐤🐤🐤🐤🐤🐤🐤jwtrefresh: ', myRefreshToken);
    console.log(cache);
    console.log('==================');
    console.log(payload); // {sub: asdasfw(유저ID)}
    if (cache) throw new UnauthorizedException('로그인이 필요한 유저입니다!');

    return {
      id: payload.sub, // req.user = {payload.sub} req안에 값이 담긴다.
    };
  }
  // 3. 여기서 리턴하여 리졸버에서 보내주는 코딩
}
