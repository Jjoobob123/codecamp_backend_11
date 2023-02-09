import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import {
  IUserServiceFindOneByEmail,
  IUsersServiceCreate,
  IUsersServiceDelete,
  IUsersServiceFindOne,
  IUsersServiceRestore,
  IUsersServiceUpdate,
} from './interface/users.inferface';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>, //
  ) {}

  findAll(): Promise<User[]> {
    return this.userRepository.find({});
  }

  findOne({ userId }: IUsersServiceFindOne): Promise<User> {
    return this.userRepository.findOne({
      where: { user_id: userId },
    });
  }

  findAllWithDeleted(): Promise<User[]> {
    return this.userRepository.find({
      withDeleted: true,
    });
  }

  //findOneByMail
  findOneByEmail({ email }: IUserServiceFindOneByEmail): Promise<User> {
    return this.userRepository.findOne({ where: { email } });
  }

  async create({
    name, //
    password,
    create_date,
    phone_number,
    email,
  }: IUsersServiceCreate): Promise<User> {
    // 중복 계정 체크
    const user = await this.findOneByEmail({ email });
    if (user) throw new ConflictException('이미 존재하는 이메일입니다!');

    // 키스트레칭으로 해커방지
    const hashedPassword = await bcrypt.hash(password, 10);

    return this.userRepository.save({
      name, //
      password: hashedPassword,
      create_date,
      phone_number,
      email,
    });
  }

  async update({
    userId, //
    updateUserInput,
  }: IUsersServiceUpdate): Promise<User> {
    const user = await this.findOne({ userId });
    console.log(user);
    console.log({ ...updateUserInput });
    const result = await this.userRepository.save({
      ...user,
      ...updateUserInput,
    });
    return result;
  }

  async delete({ userId }: IUsersServiceDelete) {
    const result = await this.userRepository.softDelete({ user_id: userId });
    return result.affected ? true : false;
  }

  async restore({ userId }: IUsersServiceRestore) {
    const result = await this.userRepository.restore({
      user_id: userId,
    });
    return result.affected ? true : false;
  }
}
