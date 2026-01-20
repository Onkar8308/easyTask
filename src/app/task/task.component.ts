import { Component, Input,OnChanges, SimpleChanges } from '@angular/core';
import { SubTaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { newTaskModel } from './task/task.model';
import { TaskService } from './tasks.service';

@Component({
  selector: 'app-task',
  imports: [SubTaskComponent, NewTaskComponent ],
  providers : [TaskService],
  standalone: true,
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent implements OnChanges{

  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;
  
  isAddingTask = false;
  constructor(
    private taskService :  TaskService,
  ){

  }
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }


 get selectedUserTask() {
   console.log(this.userId);
    return  this.taskService.getUserTasks(this.userId);
  }

  onCompleteTask(id: string) {
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCloseAddTask() {
    this.isAddingTask = false;
  }

  onAddTask(taskData : newTaskModel ){
   
    this.isAddingTask = false;
  }

  
}
