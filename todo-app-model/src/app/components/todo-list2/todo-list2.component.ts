import { Component, OnInit } from '@angular/core';
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
      { id: 1, title: 'Ezmegaz', createDate: '2022-08-11' },
      {
        id: 2,
        title: 'Megamaz',
        createDate: '2022-08-05',
        subTodos: [
          {id: 4, title: 'hehehe', createDate: '2022-08-05'},
          {id: 5, title: 'hahaha', createDate: '2022-08-05'}
        ],
      },
      { id: 3, title: 'Ésezis', createDate: '2022-07-21' },
    ];
  }

  ngOnInit(): void {}

  deleteTodo(todo: Todo): void {
    this.items = this.items.filter(i => i.id !== todo.id);
  }
}
