import { Injectable, Scope } from '@nestjs/common';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable({ scope: Scope.DEFAULT })
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly user: Repository<User>, //
  ) {}
  fetchUsers(): string {
    return 'hi';
  }

  signUp(createuserDto: CreateUserDto): string {
    const result = this.user.save(createuserDto);
    console.log(result);

    return '성공!';
  }
}
