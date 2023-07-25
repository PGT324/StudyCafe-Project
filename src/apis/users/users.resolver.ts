import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Resolver()
export class UsersResolver {
  constructor(
    private readonly usersService: UsersService, //
  ) {}

  @Query(() => String)
  fetchUsers(): string {
    return this.usersService.fetchUsers();
  }

  @Mutation(() => String)
  signUp(@Args('input') createUserDto: CreateUserDto): string {
    return this.usersService.signUp(createUserDto);
  }
}
