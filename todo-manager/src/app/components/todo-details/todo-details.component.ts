import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { users } from 'src/app/mock/user-mock';
import { Todo } from 'src/app/users-model/todo';
import { User } from 'src/app/users-model/user';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css']
})
export class TodoDetailsComponent implements OnInit {
  @Input() details?: Todo;
  users = users;

  constructor() { }

  ngOnInit(): void {

  }

  findUserById(userId: number): any {
      return this.users.find(user => user.id == userId) || null;
  }
}
