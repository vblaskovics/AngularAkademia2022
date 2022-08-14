import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { todos } from 'src/app/mock/todo-mock';
import { Todo } from 'src/app/users-model/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  @Output() item: EventEmitter<Todo> = new EventEmitter();
  todos = todos;

  constructor() {
  }

  ngOnInit(): void {}

  showTodoDetails(todo: Todo) {
    this.item.emit(todo);
  }
}
