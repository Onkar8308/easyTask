import { Component, Input } from '@angular/core';
import { SubTaskComponent } from './task/task.component';
import { TaskTemplateComponent } from "../task-template/task-template.component";
import { NewTaskComponent } from './new-task/new-task.component';
import { newTaskModel } from './task/task.model';

@Component({
  selector: 'app-task',
  imports: [SubTaskComponent, NewTaskComponent],
  standalone: true,
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  isAddingTask = false;


  onStartAddTask() {
    this.isAddingTask = true;
  }


  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;
  tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ];

  get selectedUserTask() {
    return this.tasks.filter((task) => task.userId === this.userId);
  }

  onCompleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);

  }

  onCacelAddTask() {
    this.isAddingTask = false;
  }

  onAddTask(taskData : newTaskModel ){
    this.tasks.push( {
      id : new Date().getTime.toString(),
      title : taskData.title,
      summary : taskData.summery,
      dueDate : taskData.date,
      userId : this.userId
    })

  }
}
