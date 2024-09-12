import { Component, computed, input, output, Signal } from '@angular/core';
import { UserModel } from '../models/user.models';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  selectedUser = input.required<UserModel>();
  isSelected = input.required<boolean>();
  onSelect = output<UserModel>();

  imgPath: Signal<string> = computed(
    () => 'users/' + this.selectedUser().avatar
  );

  onSelectUser(): void {
    this.onSelect.emit(this.selectedUser());
  }
}
