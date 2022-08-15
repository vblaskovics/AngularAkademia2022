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
    this.items.push({id: 1, title: 'write an email', createDate: '2022-08-11'});
    this.items.push({id: 2, title: 'make an invoice', createDate: '2022-08-05'});
    this.items.push({id: 3, title: 'paint a painting', createDate: '2022-07-21'});
  }

  ngOnInit(): void {
  }

}
