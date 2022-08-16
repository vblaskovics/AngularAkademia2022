import { Component, Input, OnInit } from '@angular/core';
import { ToDo } from 'src/app/model/to-do';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-todo-item-info',
  templateUrl: './todo-item-info.component.html',
  styleUrls: ['./todo-item-info.component.css'],
})
export class TodoItemInfoComponent implements OnInit {
  @Input() clickedTodo?: ToDo;
  @Input() clickedUser?: User;
  @Input() clickedSubtodos?: ToDo[];

  constructor() {}

  ngOnInit(): void {}

  getDateInCoolFormat(dateObj?: Date): string {
    let month = dateObj!.getUTCMonth() + 1; //months from 1-12
    let day = dateObj!.getUTCDate();
    let year = dateObj!.getUTCFullYear();

    return year + '/' + month + '/' + day;
  }
}
