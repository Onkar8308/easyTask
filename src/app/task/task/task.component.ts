import { Component, Input, Output , EventEmitter} from '@angular/core';
import { type Task } from './task.model';
import { CardComponent } from "../../shared/card/card.component";
import { DatePipe } from '@angular/common';
import { TaskService } from '../tasks.service';



@Component({
  selector: 'app-subtask',
  imports: [CardComponent,DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})



export class SubTaskComponent {

  constructor(
    private taskService :  TaskService,
  ){

  }

  @Input({required: true}) task!: Task;
  @Output() complete = new EventEmitter<string>();

  onCompleteTask() {
    this.complete.emit(this.task.id);
    this.taskService.removeTask(this.task.id);
  }
}
