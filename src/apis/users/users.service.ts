import { Injectable, Scope } from '@nestjs/common';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Todo } from '../todos/entities/todo.entity';
import { CreateTodosDto } from '../todos/dto/create-todos.dto';

@Injectable({ scope: Scope.DEFAULT })
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly user: Repository<User>,
    @InjectRepository(Todo)
    private readonly todo: Repository<Todo>, //
  ) {}
  async fetchUsers(): Promise<User[]> {
    const result = await this.user.find({ relations: ['todos'] });
    console.log(result);
    return result;
  }

  async fetchUserById(userId: string): Promise<User> {
    const result = await this.user.findOne({
      where: { id: userId },
      relations: ['todos'],
    });
    console.log(result);
    return result;
  }

  async signUp(createuserDto: CreateUserDto): Promise<string> {
    const result = await this.user.save(createuserDto);
    console.log(result);

    return '회원가입 성공!';
  }

  async deleteUser(userId: string): Promise<string> {
    const result = await this.user.delete({ id: userId });
    console.log(result);
    if (result.affected === 1) {
      return '삭제 성공!';
    } else {
      return '삭제 실패!';
    }
  }

  async updateUser(updateUserDto: UpdateUserDto): Promise<User> {
    const result = await this.user.save(updateUserDto);
    console.log(result);
    return result;
  }

  async createTodo(userId: string, createTodos: CreateTodosDto): Promise<User> {
    const user = await this.user.findOne({
      where: { id: userId },
      relations: ['todos'],
    });
    const todo = await this.todo.save(createTodos);
    user.todos.push(todo);
    const result = await this.user.save(user);
    console.log(result);
    return result;
  }
}
