import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl} from '@angular/forms';
import { todos } from 'src/app/mock/todo-mock';
import { Progress } from 'src/app/users-model/progress-enum';
import { Todo } from 'src/app/users-model/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  @Output() item: EventEmitter<Todo> = new EventEmitter();
  todos = todos;
  isAscending = false;


  constructor() {

  }

  ngOnInit(): void {}

  showTodoDetails(todo: Todo) {
    this.item.emit(todo);
  }

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
