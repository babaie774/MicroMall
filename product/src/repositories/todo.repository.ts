import { Todo } from 'src/entities/todo.entity';
import { Repository } from 'typeorm';

export class TodoRepository extends Repository<Todo> {
  async findAllTodos(): Promise<Todo[]> {
    return await this.find();
  }

  async findTodoById(id: number): Promise<Todo | undefined> {
    return await this.findOneBy({ id });
  }

  async createTodo(todo: Todo): Promise<Todo> {
    return await this.save(todo);
  }

  async updateTodo(id: number, todo: Todo): Promise<Todo> {
    const existingTodo = await this.findTodoById(id);
    if (!existingTodo) {
      throw new Error(`Todo with id ${id} not found`);
    }
    return await this.save({ ...existingTodo, ...todo });
  }

  async deleteTodo(id: number): Promise<void> {
    const existingTodo = await this.findTodoById(id);
    if (!existingTodo) {
      throw new Error(`Todo with id ${id} not found`);
    }
    await this.delete(id);
  }
}
