import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import {
  IAuthServiceGetAccessToken,
  IAuthServiceLogin,
} from './interface/auth.interface';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService, //

    private readonly usersService: UsersService, //
  ) {}

  async login({ email, password }: IAuthServiceLogin): Promise<string> {
    // 1. 이메일이 일치하는 유저 찾아주지
    const user = await this.usersService.findOneByEmail({ email });
    // 2. 일치하는 유저 없으면? 에러 보내주기
    if (!user) throw new UnprocessableEntityException('이메일이 없습니다.');
    // 3. 일치하는 유저가 있지만 비번이 틀리면 에러보내주기
    // 아래 compose 뒤 순서 틀리지 말기!
    const isAuth = await bcrypt.compare(password, user.password);
    if (!isAuth) throw new UnprocessableEntityException('암호가 틀렸습니다.');

    // 4. 둘다 맞다면? accessToken(=JWT) 브라우저에 전달하기.
    return this.getAccessToken({ user });
  }

  getAccessToken({ user }: IAuthServiceGetAccessToken): string {
    return this.jwtService.sign(
      { sub: user.user_id }, //
      { secret: process.env.JWT_ACCESS_KEY, expiresIn: '1h' },
    );
  }
}
