import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request, Response } from 'express';
import { UsersService } from '../users/users.service';
import { AuthService } from './auth.service';

interface IOAuthUser {
  user: {
    name: string;
    email: string;
    hashedPassword: string;
    age: number;
  };
}

@Controller()
export class AuthController {
  constructor(
    private readonly usersService: UsersService, //
    private readonly authService: AuthService, //
  ) {}

  //  2. html 코드 보내주기
  @UseGuards(AuthGuard('google'))
  // 가드를 통과해주려면 google.strategy 를 작성해줘야한다.
  @Get('/login/google')
  async loginGoogle(
    @Req() req: Request & IOAuthUser, //
    @Res() res: Response, //
  ) {
    //프로필을 받아온 다음, 로그인 처리해야 하는 곳
    // 1. 회원조회
    // 회원이 있으면 findOne 으로 찾아서 기다렸다가 유저 값을 반환한다.
    let user = await this.usersService.findOne({ email: req.user.email });
    // 회원이 없다면 회원등록하고 그 등록된 데이터를 유저에 담아준다.
    // 2. 회원가입이 안돼있다면? 자동회원가입
    if (!user) user = await this.usersService.create({ ...req.user });
    // 3. 회원가입이 돼있다면? 로그인하기
    //   (refreshToken, accessToken 만들어서 브러우저에 전송)
    this.authService.setRefreshToken({ user, res });
    res.redirect(
      'http://localhost:5500/class/section11/11-06-login-google/frontend/social-login.html',
      // 'http://localhost:5500/frontend/social-login.html',
    );
  }
}
