import { Component, Output, EventEmitter, Inject, Input } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { newTaskModel } from '../task/task.model';
import { TaskService } from '../tasks.service';
import { title } from 'process';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({required : true}) userId : string | undefined 
  @Output() close = new EventEmitter<void>();
  // @Output() add = new EventEmitter<newTaskModel>();

  enteredTitle = '';
  enteredSummery = '';
  entereddueDate= '';

  private taskservice = Inject(TaskService);

  onCancel() {
    this.close.emit();
  }
  onSubmit(){
    this.taskservice.addTask({
      title: this.enteredTitle,
      summery :this.enteredSummery,
      dueDate : this.entereddueDate
    },
  this.userId );
  this.close.emit();
  }

}
