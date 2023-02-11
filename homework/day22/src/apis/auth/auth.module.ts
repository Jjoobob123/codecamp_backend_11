import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from '../users/users.module';
import { UsersService } from '../users/users.service';
import { AuthResolver } from './auth.resolver';
import { AuthService } from './auth.service';

@Module({
  imports: [
    JwtModule.register({}),
    UsersModule, //
  ],

  providers: [
    AuthResolver, //
    AuthService,
    // UsersService,
  ],
})
export class AuthModule {}
