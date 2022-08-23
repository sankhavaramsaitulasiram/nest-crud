import { TaskDto } from './dto/task.dto';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  getAllTasks(): TaskDto[] {
    return this.tasksService.getAllTasks();
  }

  @Post()
  createTask(@Body() task: TaskDto): TaskDto {
    return this.tasksService.createTask(task);
  }

  @Get('/:id')
  getTaskById(@Param('id') id: string): TaskDto {
    return this.tasksService.getTaskById(id);
  }

  @Delete('/:id')
  deleteTaskById(@Param('id') id: string) {
    return this.tasksService.deleteTask(id);
  }

  @Patch('/:id')
  updateTaskById(@Body('name') name: string, @Param('id') id: string): TaskDto {
    return this.tasksService.updateTask(id, name);
  }
}
