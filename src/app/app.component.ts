import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';

import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from './tasks/tasks.component';
import { UserModel } from './models/user.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'easy-task';
  users: UserModel[] = DUMMY_USERS;

  public selectedUser!: UserModel;

  onUserSelect($event: UserModel) {
    this.selectedUser = $event;
  }
}
