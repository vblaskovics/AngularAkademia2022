import { Injectable } from '@angular/core';
import { todos } from '../database/todo-db';
import { Todo } from '../users-model/todo';
import { users } from '../database/user-db';
import { User } from '../users-model/user';

@Injectable({
  providedIn: 'root'
})

export class ListServiceService {
  todos: Todo[];
  users: User[];
  constructor() {
    this.todos = todos
    this.users = users

   }

  getTodos() {
    return this.todos
  }
}
