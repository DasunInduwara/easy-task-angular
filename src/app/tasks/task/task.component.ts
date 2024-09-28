import { Component, inject, input, output } from '@angular/core';
import { NewTaskModel, TaskModel } from '../../models/task.models';
import { TaskService } from '../tasks.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss',
})
export class TaskComponent {
  task = input.required<TaskModel>();

  public taskService =  inject(TaskService);

  public onCompleteTask() {

    this.taskService.removeTask(this.task().id);
  }

}
