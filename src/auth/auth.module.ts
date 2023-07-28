import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { UsersModule } from 'src/apis/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { JwtAccessStrategy } from './strategies/jwt.access.strategy';
import { JwtRefreshStrategy } from './strategies/jwt.refresh.strategy';

@Module({
  imports: [JwtModule.register({}), UsersModule],
  providers: [AuthService, AuthResolver, JwtAccessStrategy, JwtRefreshStrategy],
})
export class AuthModule {}
