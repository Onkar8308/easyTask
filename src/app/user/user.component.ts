import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from './user.model';
import { CardComponent } from "../shared/card/card.component";




@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  //decorator approch
  // @Input({ required: true }) id!: string;
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string;

  //taking the object as the input 

  @Input({ required: true }) user!: User;
  @Input({ required: true }) selected!: boolean;
  @Output() select = new EventEmitter<string>();

  //using output() approach 
  // select = output<string>();



  get imagePath() {
    return 'assets/users/' + this.user.avatar
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }

}
