import { Component, Input } from '@angular/core';
import { TODO } from './Interfaces/todo.interface';
import { USER } from './Interfaces/user.interface';
import { mockTodos, mockUsers, mockTodos2 } from './MockData';
import { progress } from './progress';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ToDo List Advanced';
  todo1IsSelected = true;
  todos: TODO[];
  users: USER[];
  selectedTodo?: TODO;
  signInSwitch = true;
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
  changeData() {
    if (this.todo1IsSelected) {
      this.todos = mockTodos2;
    } else {
      this.todos = mockTodos;
    }
    this.todo1IsSelected = !this.todo1IsSelected;
  }
}
