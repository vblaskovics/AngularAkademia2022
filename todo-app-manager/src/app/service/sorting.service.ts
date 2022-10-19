import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';
import { todos } from '../database/todo-db';
import { Progress } from '../models/progress';

@Injectable({
  providedIn: 'root'
})
export class SortingService {
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

  nextInProgress(todoItem: Todo) {
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
