import { Component, Input, OnInit } from '@angular/core';
import { Todo } from 'src/app/users-model/todo';
import { User } from 'src/app/users-model/user';
import { ListServiceService } from 'src/app/services/list-service.service';

@Component({
  selector: '[app-todo-items]',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.css']
})
export class TodoItemsComponent implements OnInit {

  @Input() todo?: Todo;
  @Input() user?: User;
  constructor() { }

  ngOnInit(): void {
  }

}
