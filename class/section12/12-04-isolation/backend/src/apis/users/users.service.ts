import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import {
  IUserServiceFindOneByEmail,
  IUsersServiceCreate,
} from './interface/users.interface';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>, //
  ) {}

  //원래 create에서 써야하지만 에러가 날수도 있으므로 따로 분리해서 쓴다.
  findOneByEmail({ email }: IUserServiceFindOneByEmail): Promise<User> {
    return this.usersRepository.findOne({ where: { email } });
  }

  async create({
    email,
    password,
    name,
    age,
  }: IUsersServiceCreate): Promise<User> {
    const user = await this.findOneByEmail({ email });
    if (user) throw new ConflictException('이미 등록된 이메일입니다.');
    // if (user) throw new HttpException('이미 등록된 이메일입니다.', HttpStatus.CONFLICT);

    // 중복되게 많이 사용한다 그래서 await 붙여주자
    const hashedPassword = await bcrypt.hash(password, 10);
    return this.usersRepository.save({
      email,
      password: hashedPassword,
      name,
      age,
    });
  }
}
