import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UsersService } from 'src/apis/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { IAuthUser, IContext } from './interfaces/auth.interface';
import { User } from 'src/apis/users/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService, //
  ) {}
  async login(
    phone: string,
    password: string,
    context: IContext,
  ): Promise<string> {
    const user = await this.userService.fetchUserByPhone(
      phone.replaceAll('-', ''),
    );
    if (!user) {
      throw new NotFoundException();
    }
    const isPasswordOk = await bcrypt.compare(password, user.userPassword);
    if (!isPasswordOk) {
      throw new UnauthorizedException();
    }

    //refreshToken
    this.setRefreshToken(user, context);
    //accessToken
    return this.getAccessToken(user);
  }

  getAccessToken(user: User | IAuthUser['user']): string {
    return this.jwtService.sign(
      { sub: user.id },
      { secret: process.env.SECRET_KEY, expiresIn: '20s' },
    );
  }

  setRefreshToken(user: User | IAuthUser['user'], context: IContext): void {
    const refreshToken = this.jwtService.sign(
      { sub: user.id },
      { secret: process.env.REFRESH_SECRET_KEY, expiresIn: '2w' },
    );

    context.res.setHeader(
      'set-Cookie',
      `refreshToken=${refreshToken}; path=/;`,
    );
  }

  restoreAccessToken(user: IAuthUser['user']): string {
    return this.getAccessToken(user);
  }
}
