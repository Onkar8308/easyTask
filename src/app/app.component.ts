import { Component } from '@angular/core';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './dummy-users';
import { TaskComponent } from './task/task.component';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [HeaderComponentComponent, UserComponent, TaskComponent]
})
export class AppComponent {

  users = DUMMY_USERS;
  selectedUserId?:string;
  

  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId);
  }
  

  onSelectUser(id: string) {
    this.selectedUserId = id;
  }

}
