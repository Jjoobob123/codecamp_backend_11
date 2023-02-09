import { Args, Int, Mutation, Resolver } from '@nestjs/graphql';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';

@Resolver()
export class UsersResolver {
  constructor(
    private readonly usersService: UsersService, //
  ) {}

  @Mutation(() => User)
  createUser(
    @Args('email') email: string,
    @Args('password') password: string,
    @Args('name') name: string,
    @Args({ name: 'age', type: () => Int }) age: number, // int를 쓰지 않으면 소수점으로 나오기떄문에 타입지정을 해준다.
  ): Promise<User> {
    return this.usersService.create({ email, password, name, age });
  }
}
