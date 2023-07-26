import { Args, Query, Resolver } from '@nestjs/graphql';
import { Todo } from './entities/todo.entity';
import { TodosService } from './todos.service';
import { User } from '../users/entities/user.entity';

@Resolver()
export class TodosResolver {
  constructor(
    private readonly todosService: TodosService, //
  ) {}
  @Query(() => Todo || User)
  fetchTodosByUserId(@Args('id') userId: string) {
    return this.todosService.fetchTodoByUserId(userId);
  }
}
