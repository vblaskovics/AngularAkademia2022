import { Component, Input, OnInit } from '@angular/core';
import { subTodos } from '../database/subtodo-db';
import { Todo } from '../models/todo';
import { SubTodo } from '../models/sub-todo';
import { Progress } from '../models/progress';
import { SortingService } from '../service/sorting.service';
import { User } from '../models/user';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css']
})
export class TodoDetailsComponent implements OnInit {
  @Input() details?: Todo;
  @Input() users?: User[];

  @Input() subTodos?: SubTodo[];

  user?: User;


  // Input() itemDetails: TodoItem
  constructor(public sortingService: SortingService) {
    this.findUserById(this.details?.userId.id!);
  }


  ngOnInit(): void {
  }

  findUserById(userId: number): any {
    // find user by id
    let user = this.users?.find((user) => user.id == userId);
    this.user = user;

  }

  findSubtodos(subTodoIds: number[]): SubTodo[] {
    this.subTodos = [];
    subTodoIds.forEach((id) => {
      this.subTodos?.forEach((subtodo: SubTodo) => {
        if (id == subtodo.id) {
          this.subTodos?.push(subtodo);
        }
      });
    });
    return this.subTodos;
  }

  nextProgress() {
    if (this.details) {
      this.sortingService.nextInProgress(this.details);
    }
  }

}
