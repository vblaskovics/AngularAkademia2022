import { outputAst } from '@angular/compiler';
import { Component, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-todo-list2',
  templateUrl: './todo-list2.component.html',
  styleUrls: ['./todo-list2.component.css'],
})
export class TodoList2Component implements OnInit {
  items: Todo[];

  constructor() {
    this.items = [
      { id: 1, title: 'Write an email', CreateDate: '2022-08-11' },
      { id: 2, title: 'Make an invoice', CreateDate: '2022-08-22' },
      {
        id: 3,
        title: 'Paint a painting',
        CreateDate: '2022-09-10',
        subToDos: [{ id: 4, title: 'Check preview', CreateDate: '2022-09-11' }],
      },
    ];
  }

  ngOnInit(): void {}
}
