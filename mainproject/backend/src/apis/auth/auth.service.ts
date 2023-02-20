import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import {
  IAuthServiceGetAccessToken,
  IAuthServiceLogin,
  IAuthServiceRestoreAccessToken,
  IAuthServiceSetRefreshToken,
  ILoginService,
} from './interface/auth.interface';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService, //

    private readonly userService: UsersService, //
  ) {}

  async login({ email, password, res }: IAuthServiceLogin): Promise<string> {
    // 1. 이메일이 일치하는 유저 찾아주지
    const user = await this.userService.findOneByEmail({ email });
    // 2. 일치하는 유저 없으면? 에러 보내주기
    if (!user) throw new UnprocessableEntityException('이메일이 없습니다.');
    // 3. 일치하는 유저가 있지만 비번이 틀리면 에러보내주기
    // 아래 compose 뒤 순서 틀리지 말기!
    const isAuth = await bcrypt.compare(password, user.password);
    if (!isAuth) throw new UnprocessableEntityException('암호가 틀렸습니다.');

    // 4. refreshToken(=JWT)을 만들어서 브라우저 쿠키에 저장해서 보내주기
    this.setRefreshToken({ user, res });

    // 5. 둘다 맞다면? accessToken(=JWT) 브라우저에 전달하기.
    return this.getAccessToken({ user });
  }

  restoreAccessToken({ user }: IAuthServiceRestoreAccessToken): string {
    return this.getAccessToken({ user });
  }

  setRefreshToken({ user, res }: IAuthServiceSetRefreshToken): void {
    const refreshToken = this.jwtService.sign(
      { sub: user.id, email: user.email }, //
      { secret: process.env.JWT_REFRESH_KEY, expiresIn: '2w' },
    );

    //개발환경
    res.setHeader('set-Cookie', `refreshToken = ${refreshToken} path=/`);
  }

  getAccessToken({ user }: IAuthServiceGetAccessToken): string {
    return this.jwtService.sign(
      { sub: user.id }, //
      { secret: process.env.JWT_ACCESS_KEY, expiresIn: '1w' },
    );
  }

  async loginOAuth({ req, res }: ILoginService): Promise<void> {
    // 1.회원조회
    // 회원이 있으면 findOne으로 찾아서 기다렸다가 유저값을 반환한다.
    let user = await this.userService.findOneByEmail({ email: req.user.email });
    // 회원이 없다면 회원등록하고 그 등록된 데이터를 유저에 담아준다.
    // 2. 회원가입이 안돼있다면? 자동회원가입
    if (!user) user = await this.userService.create({ ...req.user });
    console.log(user);
    // 3. 회원가입이 돼있다면? 로그인하기x
    // (accessToken,refreshToken 만들어서 브라우저 전송)
    this.setRefreshToken({ user, res });
    res.redirect('http://localhost:5500/mainproject/frontend/login/index.html');
  }
}
