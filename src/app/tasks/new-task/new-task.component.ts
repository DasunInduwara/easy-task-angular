import {
  Component,
  EventEmitter,
  inject,
  input,
  Output,
  output,
  signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskModel } from '../../models/task.models';
import { TaskService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.scss',
})
export class NewTaskComponent {
  @Output() onCancel = new EventEmitter<void>();
  public userId = input.required<string>();

  public taskService = inject(TaskService);

  public enterdTitle = '';
  public enterdSummery = '';
  public enterdDate = '';

  public onClickCancel() {
    this.onCancel.emit();
  }

  public onSubmit(): void {
    this.taskService.addTask(
      {
        title: this.enterdTitle,
        summery: this.enterdSummery,
        date: this.enterdDate,
      },
      this.userId()
    );
  }
}
