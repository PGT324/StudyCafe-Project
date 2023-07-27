import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateTodosDto } from '../todos/dto/create-todos.dto';
import { Todo } from '../todos/entities/todo.entity';

@Resolver()
export class UsersResolver {
  constructor(
    private readonly usersService: UsersService, //
  ) {}

  @Query(() => [User])
  fetchUsers(): Promise<User[]> {
    return this.usersService.fetchUsers();
  }

  @Query(() => User)
  fetchUserById(@Args('id') userId: string): Promise<User> {
    return this.usersService.fetchUserById(userId);
  }

  @Mutation(() => String)
  signUp(@Args('input') createUserDto: CreateUserDto): Promise<string> {
    return this.usersService.signUp(createUserDto);
  }

  @Mutation(() => String)
  deleteUser(@Args('id') userId: string): Promise<string> {
    return this.usersService.deleteUser(userId);
  }

  @Mutation(() => User)
  updateUser(@Args('input') updateUserDto: UpdateUserDto): Promise<User> {
    return this.usersService.updateUser(updateUserDto);
  }

  @Mutation(() => User)
  createTodo(
    @Args('id') userId: string,
    @Args('input') createTodos: CreateTodosDto,
  ): Promise<User> {
    return this.usersService.createTodo(userId, createTodos);
  }

  @Mutation(() => String)
  userGetCoupon(
    @Args('id') id: string,
    @Args('code') code: number,
  ): Promise<string> {
    return this.usersService.userGetCoupon(id, code);
  }
}
