import { Module } from '@nestjs/common';
import { TodosResolver } from './todos.resolver';
import { TodosService } from './todos.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Todo } from './entities/todo.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Todo, //
    ]),
  ],
  providers: [TodosResolver, TodosService],
})
export class TodosModule {}
