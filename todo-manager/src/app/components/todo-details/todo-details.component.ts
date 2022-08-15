import { Component, Input, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css']
})
export class TodoDetailsComponent implements OnInit {
  @Input() todo?: Todo;
  @Input() users?: User[];


  constructor() { }

  ngOnInit(): void {
  }

  nameUser(userId: any) {
    let user = this.users?.find((user) => {
      if (userId === user.id) {
        return user;
      }
      return false;
    });
    return user?.name;
  }

  userEmail(userId: any) {
    let user = this.users?.find((user) => {
      if (userId === user.id) {
        return user;
      }
      return false;
    });
    return user?.email;
  }

}
