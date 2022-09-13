import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TodoService } from 'src/app/service/todo.service';
import { Todo } from 'src/app/users-model/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  @Output() item: EventEmitter<Todo> = new EventEmitter();

  constructor(public todoService: TodoService) {
    this.todoService.sortProgress();
  }

  ngOnInit(): void {}

  showTodoDetails(todo: Todo) {
    this.item.emit(todo);
  }

}
