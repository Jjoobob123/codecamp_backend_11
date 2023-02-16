import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request, Response } from 'express';
// import { UsersService } from '../users/users.service';
import { AuthService } from './auth.service';
import { DynamicAuthGuard } from './guards/dynamic-auth.guard-04';
import { IOAuthLoginUser } from './interface/auth.interface';

@Controller()
export class AuthController {
  constructor(
    // private readonly userService: UsersService, //
    private readonly authService: AuthService, //
  ) {}

  @Get('/login/:social')
  @UseGuards(DynamicAuthGuard)
  loginOAuth(
    @Req() req: Request & IOAuthLoginUser, //
    @Res() res: Response, //
  ) {
    req.params;
    // OAuth 의 로직은 중복되기 때문에 auth.service에 하나의 함수를 만들어줘 합쳐준다.
    this.authService.loginOAuth({ req, res });
  }
}
//   @UseGuards(AuthGuard('kakao'))
//   @Get('/login/kakao')
//   loginOAuth(
//     @Req() req: Request & IOAuthLoginUser, //
//     @Res() res: Response, //
//   ) {
//     // OAuth 의 로직은 중복되기 때문에 auth.service에 하나의 함수를 만들어줘 합쳐준다.
//     this.authService.loginOAuth({ req, res });
//   }

//   @UseGuards(AuthGuard('naver'))
//   @Get('/login/naver')
//   loginOAuth(
//     @Req() req: Request & IOAuthLoginUser, //
//     @Res() res: Response, //
//   ) {
//     // OAuth 의 로직은 중복되기 때문에 auth.service에 하나의 함수를 만들어줘 합쳐준다.
//     this.authService.loginOAuth({ req, res });
//   }
