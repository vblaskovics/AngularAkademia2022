import { Injectable } from '@angular/core';
import { todos } from '../mock/todo-mock';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  isAscending = false;
  todos = todos;

  constructor() { }

  sortProgress() {
    if (this.isAscending) {
      this.todos.sort((a, b) =>
        a.progress < b.progress ? 1 : a.progress > b.progress ? -1 : 0
      );
    } else {
      this.todos.sort((a, b) =>
        a.progress > b.progress ? 1 : a.progress < b.progress ? -1 : 0
      );
    }
    this.isAscending = !this.isAscending;
  }
}
