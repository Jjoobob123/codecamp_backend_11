import {
  CACHE_MANAGER,
  Inject,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import { Cache } from 'cache-manager';
import * as jwt from 'jsonwebtoken';
import { IContext } from 'src/commons/interfaces/context';
import { AuthService } from './auth.service';
import { GqlAuthGuard } from './guards/gql-auth.guards';

@Resolver()
export class AuthResolver {
  constructor(
    private readonly authService: AuthService, //

    @Inject(CACHE_MANAGER)
    private readonly cacheManager: Cache,
  ) {}

  @Mutation(() => String)
  login(
    @Args('email') email: string, //
    @Args('password') password: string,
    @Context() context: IContext,
  ): Promise<string> {
    return this.authService.login({ email, password, res: context.res });
  }

  @UseGuards(GqlAuthGuard('refresh'))
  @Mutation(() => String)
  restoreAccessToken(
    @Context() context: IContext, //
  ): string {
    return this.authService.restoreAccessToken({ user: context.req.user });
  }

  @UseGuards(GqlAuthGuard('access'))
  @Mutation(() => String)
  async logout(@Context() context: IContext) {
    try {
      const accessToken = await context.req.headers['authorization'].replace(
        'Bearer ',
        '',
      );
      const refreshToken = await context.req.headers['cookie'].split(
        'refreshToken=',
      )[1];

      // accessToken 토큰
      const jwtAccessKey = jwt.verify(accessToken, process.env.JWT_ACCESS_KEY);
      console.log(
        '🐧🐧🐧🐧🐧🐧🐧🐧🐧🐧🐧acc: ',
        jwt.verify(accessToken, 'myAccessKey'),
      );
      console.log('&&&&&&&&&&', refreshToken);

      // refresh 토큰
      const jwtRefreshKey = jwt.verify(
        refreshToken,
        process.env.JWT_REFRESH_KEY,
      );
      console.log(
        '🐧🐧🐧🐧🐧🐧🐧🐧🐧🐧🐧 myRefreshKey :',
        jwt.verify(refreshToken, 'myRefreshKey'),
      );

      await this.cacheManager.set(`accessToken:${accessToken}`, 'accessToken', {
        ttl: jwtAccessKey['exp'] - jwtAccessKey['iat'],
      });
      console.log(accessToken);

      await this.cacheManager.set(
        `refreshToken:${refreshToken}`,
        'refreshToken',
        {
          ttl: jwtRefreshKey['exp'] - jwtRefreshKey['iat'],
        },
      );
      // console.log('🦊🦊🦊🦊🦊🦊🦊🦊🦊🦊🦊 로그아웃');
      return '🦊🦊🦊🦊🦊🦊🦊🦊🦊🦊🦊로그아웃에 성공했습니다.';
    } catch (err) {
      throw new UnauthorizedException('로그아웃을 실패했습니다.');
    }
  }
}
