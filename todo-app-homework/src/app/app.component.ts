import { Component } from '@angular/core';
import { TODO } from './Interfaces/todo.interface';
import { USER } from './Interfaces/user.interface';
import { mockTodos, mockUsers } from './MockData';
import { progress } from './progress';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ToDo List Advanced';
  todos: TODO[];
  users: USER[];
  selectedTodo?: TODO;

  constructor() {
    this.todos = mockTodos;
    this.users = mockUsers;
  }
  handleSelectTodo(selectedTodo: TODO) {
    this.selectedTodo = selectedTodo;
  }
  todoInProgress(): number {
    let todoCounter = 0;
    for (const todo of this.todos) {
      if (todo.progress == progress.inProgress) {
        todoCounter++;
      }
    }
    return todoCounter;
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
}