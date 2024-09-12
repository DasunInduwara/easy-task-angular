import { Component, EventEmitter, Output, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskModel } from '../../models/task.models';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.scss',
})
export class NewTaskComponent {
  @Output() onCancel = new EventEmitter<void>();
  @Output() onAdd = new EventEmitter<NewTaskModel>();

  public enterdTitle = '';
  public enterdSummery = '';
  public enterdDate = '';

  public onClickCancel() {
    this.onCancel.emit();
  }

  public onSubmit(): void {
    this.onAdd.emit({
      title: this.enterdTitle,
      summery: this.enterdSummery,
      date: this.enterdDate,
    });
  }
}
