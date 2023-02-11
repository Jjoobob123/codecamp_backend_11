import { User } from 'src/apis/users/entities/user.entity';

export interface IAuthServiceLogin {
  email: string;
  password: string;
}

export interface IAuthServiceGetAccessToken {
  user: User;
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
