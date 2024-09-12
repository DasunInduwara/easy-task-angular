import { Component, computed, input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { UserModel } from '../models/user.models';
import { NewTaskComponent } from './new-task/new-task.component';
import { NewTaskModel } from '../models/task.models';
import { TaskService} from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss',
})
export class TasksComponent {
  user = input.required<UserModel>();

  constructor(private taskServices : TaskService){

  }

  public isShowAddTask = false;
  // private taskServices = new TaskService();

  get selectedUserTasks() {
    return this.taskServices.getUserTasks(this.user().id);
  }

  onCompleteTask(id: string) {
    this.taskServices.removeTask(id);
  }

  onClickAddTask() {
    this.isShowAddTask = true;
  }
  onCancelAddTask() {
    this.isShowAddTask = false;
  }
  onAddTask($event: NewTaskModel) {
    this.taskServices.addTask($event, this.user().id);
    this.isShowAddTask = false;
  }
}
