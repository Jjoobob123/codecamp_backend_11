import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from '../users/users.module';
import { UsersService } from '../users/users.service';
import { AuthResolver } from './auth.resolver';
import { AuthService } from './auth.service';
import { JwtAccessStrategy } from './strategies/jwt-access.strategy';
import { JwtRefreshStrategy } from './strategies/jwt-refresh.strategy';

@Module({
  imports: [
    JwtModule.register({}),
    UsersModule, //
  ],

  providers: [
    JwtAccessStrategy,
    JwtRefreshStrategy,
    AuthResolver, //
    AuthService,
    // UsersService,
  ],
})
export class AuthModule {}
