import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-todo-list2',
  templateUrl: './todo-list2.component.html',
  styleUrls: ['./todo-list2.component.css'],
})
export class TodoList2Component implements OnInit {
  items: Todo[] = new Array();

  constructor() {
    this.items = [
      { id: 1, title: 'Write a letter', createDate: '2022-08-11' },
      {
        id: 2,
        title: 'Pay every invoice',
        createDate: '2022-08-05',
        subToDos: [
          { id: 4, title: 'Check it on the table', createDate: '2022-08-05' },
          { id: 5, title: 'Go to the postoffice', createDate: '2022-08-06' },
        ],
      },
      { id: 3, title: 'Paint the wall', createDate: '2022-08-01' },
    ];
  }
  ngOnInit(): void {}

  deleteItem(todo: Todo): void {
    this.items = this.items.filter((i) => i.id !== todo.id);
  }
}
