import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UpdateUserInput } from './dto/update-users.input';

import { User } from './entities/user.entity';
import { UsersService } from './users.service';

@Resolver()
export class UsersResolver {
  constructor(
    private readonly usersService: UsersService, //
  ) {}

  //전체 조회하기
  @Query(() => [User])
  fetchUsers(): Promise<User[]> {
    return this.usersService.findAll();
  }

  // 하나 조회하기
  @Query(() => User)
  fetchUser(
    @Args('userId') userId: string, //
  ): Promise<User> {
    return this.usersService.findOne({ userId });
  }

  // 삭제된 목록 조회하기
  @Query(() => [User])
  fetchUserWithDeleted(): Promise<User[]> {
    return this.usersService.findAllWithDeleted();
  }

  @Mutation(() => User)
  createUser(
    @Args('name') name: string,
    @Args('password') password: string,
    @Args('create_date') create_date: Date,
    @Args('phone_number') phone_number: string,
    @Args('email') email: string,
  ): Promise<User> {
    return this.usersService.create({
      name,
      password,
      create_date,
      phone_number,
      email,
    });
  }

  @Mutation(() => User)
  updateUser(
    @Args('userId') userId: string,
    @Args('updateUserInput') updateUserInput: UpdateUserInput,
  ): Promise<User> {
    return this.usersService.update({ userId, updateUserInput });
  }

  @Mutation(() => Boolean)
  deleteUser(
    @Args('userId') userId: string, //
  ): Promise<boolean> {
    return this.usersService.delete({ userId });
  }
}
