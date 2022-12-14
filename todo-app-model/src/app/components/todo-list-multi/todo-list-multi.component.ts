import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-todo-list-multi',
  templateUrl: './todo-list-multi.component.html',
  styleUrls: ['./todo-list-multi.component.css'],
})
export class TodoListMultiComponent implements OnInit {
  items: Todo[];

  constructor() {
    this.items = [
      { id: 1, title: 'Write an email', createDate: '2022-08-11' },
      {
        id: 2,
        title: 'Make an invoice',
        createDate: '2022-08-05',
        subTodos: [
          { id: 4, title: 'Check preview', createDate: '2022-08-11' },
          { id: 5, title: 'Print invoice', createDate: '2022-08-11' },
        ],
      },
      { id: 3, title: 'Paint a painting', createDate: '2022-07-21' },
    ];
  }

  ngOnInit(): void {}

  deleteItem(todo: Todo): void {
    this.items = this.items.filter(i => i.id !== todo.id);
  }
}
