import { UseGuards } from '@nestjs/common';
import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GqlAuthAccessGuard } from '../auth/guards/gql-auth.guards';
import { IContext } from '../auth/interface/auth.interface';
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

  @UseGuards(GqlAuthAccessGuard)
  @Query(() => String)
  fetchLoginUser(@Context() context: IContext): string {
    //유저 정보 꺼내오기
    console.log('==========');
    console.log(context.req.user);
    console.log('==========');

    return '인가에 성공하셨습니다';
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

  @UseGuards(GqlAuthAccessGuard)
  @Mutation(() => User)
  updateUserPwd(
    @Context() context: IContext,
    @Args('password') password: string,
  ): Promise<User> {
    console.log(context.req.user.id);
    const userId = context.req.user.id;
    return this.usersService.updateUserPwd({ userId, password });
  }

  @Mutation(() => Boolean)
  deleteUser(
    @Args('userId') userId: string, //
  ): Promise<boolean> {
    return this.usersService.delete({ userId });
  }

  @UseGuards(GqlAuthAccessGuard)
  @Mutation(() => Boolean)
  deleteLoginUser(@Context() context: IContext): Promise<boolean> {
    return this.usersService.delete({ userId: context.req.user.id });
  }
}
