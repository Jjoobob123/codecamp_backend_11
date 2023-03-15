import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

// import {kakaoStrategy} from 'passport-kakao'
// import {NaverStrategy} from 'passport-naver'
// import {GoogleStrategy} from 'passport-google'

export class JwtAccessStrategy extends PassportStrategy(Strategy, 'access') {
  constructor() {
    //자식이 부모한테 값을 던져주고 싶을 때 super 함수를 쓴다.
    super({
      // 1. 비밀번호 검증 & 만료기간 검증
      //   jwtFromRequest: (req) => {
      //     const temp = req.header.Authorization; // Bearer asdadwad
      //     const accessToken = temp.toLowercase().replace('bearer ', '');
      //     return accessToken;
      //   },
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),

      secretOrKey: '나의비밀번호',
    });
  }

  // 2. 유저아이디를 받아온 다음 코딩
  validate(payload) {
    console.log(payload); // {sub: asdasfw(유저ID)}

    return {
      id: payload.sub, // req.user = {payload.sub} req안에 값이 담긴다.
    };
  }
  // 3. 여기서 리턴하여 리졸버에서 보내주는 코딩
}
