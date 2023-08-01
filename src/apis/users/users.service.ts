import { Injectable, Scope } from '@nestjs/common';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Todo } from '../todos/entities/todo.entity';
import { CreateTodosDto } from '../todos/dto/create-todos.dto';
import { Coupon } from '../coupons/entities/coupon.entity';
import * as bcrypt from 'bcrypt';

@Injectable({ scope: Scope.DEFAULT })
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly user: Repository<User>,
    @InjectRepository(Todo)
    private readonly todo: Repository<Todo>,
    @InjectRepository(Coupon)
    private readonly coupon: Repository<Coupon>, //
  ) {}
  async fetchUsers(): Promise<User[]> {
    const result = await this.user.find({ relations: ['todos', 'coupon'] });
    return result;
  }

  async fetchUserByPhone(phone: string): Promise<User> {
    const result = await this.user.findOne({
      where: { userPhone: phone },
      relations: ['todos', 'coupon'],
    });
    return result;
  }

  async signUp(createuserDto: CreateUserDto): Promise<string> {
    try {
      const password = await bcrypt.hash(createuserDto.userPassword, 10);
      createuserDto.userPassword = password;
      const phone = createuserDto.userPhone.replaceAll('-', '');
      createuserDto.userPhone = phone;
      await this.user.save(createuserDto);
      return '회원가입 성공';
    } catch (error) {
      console.log(error);
      throw new Error('회원가입 실패!');
    }
  }

  async deleteUser(userId: string): Promise<string> {
    const result = await this.user.delete({ id: userId });
    if (result.affected === 1) {
      return '삭제 성공!';
    } else {
      return '삭제 실패!';
    }
  }

  async updateUser(updateUserDto: UpdateUserDto): Promise<User> {
    const result = await this.user.save(updateUserDto);
    return result;
  }

  async createTodo(userId: string, createTodos: CreateTodosDto): Promise<User> {
    const user = await this.user.findOne({
      where: { id: userId },
    });
    const todo = await this.todo.save(createTodos);
    user.todos = [todo];
    const result = await this.user.save(user);

    return result;
  }

  async userGetCoupon(id: string, code: number): Promise<string> {
    const coupon = await this.coupon.findOne({ where: { couponCode: code } });
    const user = await this.user.findOne({ where: { id: id } });
    const result1 = (user.coupon = [coupon]);
    console.log(result1);
    const result = await this.user.save({
      id: user.id,
      ...user,
    });

    console.log(result);
    if (result) {
      return '쿠폰등록 성공!';
    } else {
      return '쿠폰등록 실패!';
    }
  }
}
