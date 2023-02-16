import { UpdateUserInput } from '../dto/update-users.input';

export interface IUsersServiceCreate {
  name?: string;
  password?: string;
  // create_date?: Date;
  phone_number?: string;
  email?: string;
}

export interface IUserServiceFindOneByEmail {
  email: string;
}

export interface IUsersServiceFindOne {
  userId?: string;
  email?: string;
}

export interface IUsersServiceUpdate {
  userId: string;
  updateUserInput: UpdateUserInput;
}

export interface IUsersServiceDelete {
  userId: string;
}

export interface IUsersServiceRestore {
  userId: string;
}

export interface IUsersPwdUpdate {
  userId: string;
  password: string;
}

export class IUserServiceGetHasedPwd {
  password: string;
}

export class IUserServiceFindUpDateUser {
  userId: string;
}
