import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-google-oauth20';

// 구글 소셜 로그인을 연결해주려면 모듈 하나 설치해줘야한다.
// 명령어 : yarn add passport-google-oauth20
// 명령어 : yarn add --dev @types/passport-google-oauth20

// 4,5,6번 코드들은 다  PassportStrategy 내장되어 있음
export class JwtGoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor() {
    super({
      clientID: process.env.JWT_CLIENTID, // 이것들은 구글 클라우드 플램폼에서 받을수 있음
      clientSecret: process.env.JWT_CLIENTSECRET,
      callbackURL: 'http://localhost:3000/login/google',
      scope: ['email', 'profile'],
    });
  }

  validate(accessToken, refreshToken, profile) {
    console.log(accessToken);
    console.log(refreshToken);
    console.log(profile);

    return {
      name: profile.displayName,
      email: profile.emails[0].value,
      // hashedPassword
      password: 'hashedPassword',
      age: 0,
    };
  }
}
