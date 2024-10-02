// todo.service.ts
import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from 'src/dto/create-todo.dto';
import { UpdateTodoDto } from 'src/dto/update-todo.dto';
import { Todo } from 'src/entities/todo.entity';
import { TodoRepository } from 'src/repositories/todo.repository';

@Injectable()
export class TodoService {
  constructor(private readonly todoRepository: TodoRepository) {}

  async getAllTodos(): Promise<Todo[]> {
    return await this.todoRepository.findAllTodos();
  }

  async getTodoById(id: number): Promise<Todo | undefined> {
    return await this.todoRepository.findTodoById(id);
  }

  async createTodo(createTodoDto: CreateTodoDto): Promise<Todo> {
    const todo = new Todo();
    todo.title = createTodoDto.title;
    todo.description = createTodoDto.description;
    return await this.todoRepository.createTodo(todo);
  }

  async updateTodo(id: number, updateTodoDto: UpdateTodoDto): Promise<Todo> {
    const todo = await this.todoRepository.findTodoById(id);
    if (!todo) {
      throw new Error(`Todo with id ${id} not found`);
    }
    todo.title = updateTodoDto.title;
    todo.description = updateTodoDto.description;
    return await this.todoRepository.updateTodo(id, todo);
  }

  async deleteTodo(id: number): Promise<void> {
    await this.todoRepository.deleteTodo(id);
  }
}
