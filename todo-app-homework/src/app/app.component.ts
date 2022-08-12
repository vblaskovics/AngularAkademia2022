import { Component } from '@angular/core';
import { TODO } from './Interfaces/todo.interface';
import { USER } from './Interfaces/user.interface';
import { mockTodos, mockUsers } from './MockData';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-app-homework';
  todos:TODO[]
  users:USER[]
  constructor(){
    this.todos = mockTodos
    this.users = mockUsers
  }
}
