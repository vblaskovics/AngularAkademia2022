import { Component, Input, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo-model';
import { User } from 'src/app/models/user-model';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css'],
})
export class TodoDetailsComponent implements OnInit {
  @Input() todoSelected?: Todo;
  @Input() users?: User[];

  constructor() {}

  ngOnInit(): void {}

  findUser(id: number) {
    const findId = this.users?.find((obj) => {
      if (obj.id === id) {
        return obj.name;
      }
      return;
    });
    return findId?.name;
  }

  findEmail(id: number) {
    const findEmail = this.users?.find((obj) => {
      if (obj.id === id) {
        return obj.email;
      }
      return;
    });
    return findEmail?.email;
  }
}
