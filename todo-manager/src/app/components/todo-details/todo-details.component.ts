import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { subTodos } from 'src/app/mock/subtodo-mock';
import { users } from 'src/app/mock/user-mock';
import { Progress } from 'src/app/users-model/progress-enum';
import { Subtodo } from 'src/app/users-model/subtodo';
import { Todo } from 'src/app/users-model/todo';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css'],
})
export class TodoDetailsComponent implements OnInit {
  @Input() details?: Todo;
  users = users;
  subTodos = subTodos;
  commonSubtodos: Subtodo[] = [];

  constructor() {}

  ngOnInit(): void {}

  findUserById(userId: number): any {
    return this.users.find((user) => user.id == userId) || null;
  }

  findSubtodos(subTodoIds: number[]): Subtodo[] {
    this.commonSubtodos = [];
    subTodoIds.forEach((id) => {
      this.subTodos.forEach((subtodo: Subtodo) => {
        if (id == subtodo.id) {
          this.commonSubtodos.push(subtodo);
        }
      });
    });
    return this.commonSubtodos;
  }

  nextProgress() {
    let nextProgress;
    if (this.details?.progress == Progress.OPEN) {
      nextProgress = Progress.IN_PROGRESS;
    } else if (this.details?.progress == Progress.IN_PROGRESS) {
      nextProgress = Progress.DONE;
    } else {
      nextProgress = Progress.OPEN;
    }
    if (this.details) {
      this.details.progress = nextProgress;
    }
  }
}
