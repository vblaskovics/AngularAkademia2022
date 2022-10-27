import { Injectable, Input } from '@angular/core';
import { todos } from '../database/todo-db';
import { Todo } from '../models/todo';
import { Progress } from '../models/progress';

@Injectable({
  providedIn: 'root'
})
export class TodoService {


  todos = todos;
  @Input()
  progress!: Progress;
  todoLength: number = this.numberOfTodos();
  

  constructor() { }

  numberOfTodos(): number {
    return this.todos.length;
  }

  addTodoItem(todoItem: Todo) {
    this.todos.push(todoItem);
  }

}


