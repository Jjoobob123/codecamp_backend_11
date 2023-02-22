import { CACHE_MANAGER, Inject, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Cache } from 'cache-manager';
import { ExtractJwt, Strategy } from 'passport-jwt';

export class JwtAccessStrategy extends PassportStrategy(Strategy, 'access') {
  constructor(
    @Inject(CACHE_MANAGER)
    private readonly cacheManager: Cache,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_ACCESS_KEY,
      passReqToCallback: true,
    });
  }

  async validate(req, payload) {
    const myAccessToken = req.headers.authorization.split('Bearer ')[1];
    const cache = await this.cacheManager.get(`accessToken:${myAccessToken}`);
    console.log(myAccessToken, '🦊🦊🦊🦊 hi');
    if (cache) throw new UnauthorizedException('로그인이 필요한 유저입니다.');

    return {
      id: payload.sub,
    };
  }
}
