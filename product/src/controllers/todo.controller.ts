// todo.controller.ts
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateTodoDto } from 'src/dto/create-todo.dto';
import { UpdateTodoDto } from 'src/dto/update-todo.dto';
import { Todo } from 'src/entities/todo.entity';
import { TodoService } from 'src/services/todo.service';

@Controller('todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  async getAllTodos(): Promise<Todo[]> {
    return await this.todoService.getAllTodos();
  }

  @Get(':id')
  async getTodoById(@Param('id') id: number): Promise<Todo | undefined> {
    return await this.todoService.getTodoById(id);
  }

  @Post()
  async createTodo(@Body() createTodoDto: CreateTodoDto): Promise<Todo> {
    return await this.todoService.createTodo(createTodoDto);
  }

  @Put(':id')
  async updateTodo(
    @Param('id') id: number,
    @Body() updateTodoDto: UpdateTodoDto,
  ): Promise<Todo> {
    return await this.todoService.updateTodo(id, updateTodoDto);
  }

  @Delete(':id')
  async deleteTodo(@Param('id') id: number): Promise<void> {
    await this.todoService.deleteTodo(id);
  }
}
