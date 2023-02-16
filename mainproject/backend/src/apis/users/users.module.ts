import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtAccessStrategy } from '../auth/strategies/jwt-access.strategy';
import { JwtGoogleStrategy } from '../auth/strategies/jwt-social.google.strategy';
import { JwtNaverStrategy } from '../auth/strategies/jwt-social.naver.strategy';
import { User } from './entities/user.entity';
import { UsersResolver } from './users.resolver';
import { UsersService } from './users.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]), //
  ],
  providers: [
    UsersResolver, //
    UsersService,
    JwtAccessStrategy,
    JwtGoogleStrategy,
    JwtNaverStrategy,
  ],

  exports: [
    UsersService, //
  ],
})
export class UsersModule {}
