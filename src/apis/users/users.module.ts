import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { User } from './entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Todo } from '../todos/entities/todo.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      User,
      Todo, //
    ]),
  ],
  providers: [
    UsersService,
    UsersResolver, //
  ],
})
export class UsersModule {}
