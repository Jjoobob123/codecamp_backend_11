import { Request, Response } from 'express';
import { User } from 'src/apis/users/entities/user.entity';

export interface IAuthServiceLogin {
  email: string;
  password: string;
  context: IContext;
}

export interface IAuthServiceGetAccessToken {
  user: User;
}

export interface IAuthServiceSetRefreshToken {
  user: User;
  context: IContext;
}

export interface IAuthUser {
  user?: {
    id: string;
  };
}

export interface IContext {
  req: Request & IAuthUser;
  res: Response;
}
