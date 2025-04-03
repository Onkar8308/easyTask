import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


@Component({
  selector: 'app-user-detail',
  imports: [CommonModule,BrowserModule],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.css'
})
export class UserDetailComponent {
  // @Input() user: { id: string; avatar: string; name: string; } ;
 @Input() user!: { id: string; avatar: string; name: string; };
}
