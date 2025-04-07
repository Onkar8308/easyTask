import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { newTaskModel } from '../task/task.model';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Output() cancel = new EventEmitter<void>();
  @Output() add = new EventEmitter<newTaskModel>();

  enteredTitle = '';
  enteredSummery = '';
  entereddueDate= '';

  onCancel() {
    this.cancel.emit();
  }
  onSubmit(){
    this.add.emit({
      title : this.enteredTitle,
      summery:this.enteredSummery,
      date :this.entereddueDate
    })
  }

}
