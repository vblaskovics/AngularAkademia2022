import { Injectable } from '@angular/core';
import { todos } from '../mock/todo-mock';
import { Progress } from '../users-model/progress-enum';
import { Todo } from '../users-model/todo';

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

  nextProgress(todoItem: Todo) {
    let nextProgress;
    if (todoItem.progress == Progress.OPEN) {
      nextProgress = Progress.IN_PROGRESS;
    } else if (todoItem.progress == Progress.IN_PROGRESS) {
      nextProgress = Progress.DONE;
    } else {
      nextProgress = Progress.OPEN;
    }
    todoItem.progress = nextProgress;
  }
}
