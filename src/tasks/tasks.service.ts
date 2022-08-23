import { TaskDto } from './dto/task.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
  private tasks: TaskDto[] = [];

  getAllTasks() {
    return this.tasks;
  }

  getTaskById(id: string) {
    return this.tasks.find((task) => task.id === id);
  }

  createTask(task: TaskDto) {
    this.tasks.push(task);
    return task;
  }

  deleteTask(id: string) {
    const task = this.tasks.find((ts) => ts.id === id);
    this.tasks = this.tasks.filter((tsk) => tsk.id !== id);
    return task;
  }

  updateTask(id: string, name: string) {
    const index = this.tasks.findIndex((task) => task.id === id);
    this.tasks[index].name = name;
    return this.tasks[index];
  }
}
