// update-todo.dto.ts
import { IsOptional, IsString } from 'class-validator';

export class UpdateTodoDto {
  @IsString()
  @IsOptional()
  title: string;

  @IsString()
  @IsOptional()
  description: string;
}
