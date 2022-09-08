import { Injectable } from '@angular/core';
import { TODO } from '../Interfaces/todo.interface';
import { mockTodos } from '../MockData';
import { progress } from '../progress';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  todos: TODO[];

  constructor() {
    this.todos = mockTodos;
  }
  changeStateOfTodo(todo: TODO): void {
    switch (todo.progress) {
      case progress.open:
        todo.progress = progress.inProgress;
        break;
      case progress.inProgress:
        todo.progress = progress.done;
        break;
      case progress.done:
        todo.progress = progress.open;
        break;
      default:
        break;
    }
  }
  pushTodo(title: string) {
    let max = 0;
    this.todos.forEach((todo) => {
      todo.id > max && (max = todo.id);
    });
    let pushable: TODO = {
      id: max + 1,
      title: title,
      progress: progress.open,
      user_id: 1,
      date: '2022-08-17',
    };
    this.todos.push(pushable);
  }
}
