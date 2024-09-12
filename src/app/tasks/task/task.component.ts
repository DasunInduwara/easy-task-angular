import { Component, input, output } from '@angular/core';
import { NewTaskModel, TaskModel } from '../../models/task.models';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss',
})
export class TaskComponent {
  task = input.required<TaskModel>();
  onComplete = output<string>();

  public onCompleteTask() {
    this.onComplete.emit(this.task().id);
  }

  public addTask(taskData : NewTaskModel){
    
  }
}
