import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  items: Todo[] = new Array();

  constructor() {
    this.items.push({id: 1, title: 'Write an email', createDate: '2022-08-11'})
    this.items.push({id: 2, title: 'Make an invoice', createDate: '2022-08-05'})
    this.items.push({id: 3, title: 'Paint a painting', createDate: '2022-07-22'})
  }

  ngOnInit(): void {
  }

}
