import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { User } from './entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Todo } from '../todos/entities/todo.entity';
import { Coupon } from '../coupons/entities/coupon.entity';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      User,
      Todo,
      Coupon, //
    ]),
  ],
  providers: [
    UsersService,
    UsersResolver,
    JwtService, //
  ],
})
export class UsersModule {}
