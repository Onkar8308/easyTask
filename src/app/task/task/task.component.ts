import { Component, Input, Output , EventEmitter} from '@angular/core';
import { type Task } from './task.model';



@Component({
  selector: 'app-subtask',
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class SubTaskComponent {

  @Input({required: true}) task!: Task;
  @Output() complete = new EventEmitter<string>();

  onCompleteTask() {
    this.complete.emit(this.task.id);
  }
}
