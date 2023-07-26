import { Injectable } from '@nestjs/common';
import { Todo } from './entities/todo.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(Todo)
    private readonly todo: Repository<Todo>, //
  ) {}
  async fetchTodoByUserId(userId: string) {
    const result = await this.todo.findOne({
      where: { user: { id: userId } },
      relations: ['user'],
    });
    console.log(result);
    return result;
  }
}
