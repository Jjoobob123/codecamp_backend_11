import { Request, Response } from 'express';
import { User } from 'src/apis/users/entities/user.entity';
import { IAuthUser, IContext } from 'src/commons/interfaces/context';

export interface IAuthServiceLogin {
  email: string;
  password: string;
  res: IContext['res'];
}

export interface IAuthServiceGetAccessToken {
  user: User | IAuthUser['user'];
}

export interface IAuthServiceSetRefreshToken {
  user: User;
  res: IContext['res'];
}

export interface IAuthServiceRestoreAccessToken {
  user: IAuthUser['user'];
}

export interface ILoginService {
  req: Request & IOAuthLoginUser; //
  res: Response;
}

export interface IOAuthLoginUser {
  user: {
    name: string;
    email: string;
    password: string;
    phone_number: string;
  };
}
