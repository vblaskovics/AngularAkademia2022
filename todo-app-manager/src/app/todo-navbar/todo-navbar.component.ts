import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo';
import { todos } from '../database/todo-db';
import { Progress } from '../models/progress';
import { TodoService } from '../service/todo.service';
import { SortingService } from '../service/sorting.service';

@Component({
  selector: 'app-todo-navbar',
  templateUrl: './todo-navbar.component.html',
  styleUrls: ['./todo-navbar.component.css']
})
export class TodoNavbarComponent implements OnInit {

  todoLength?: number;

  constructor(private todoService: TodoService) {
    this.todoLength = this.todoService.numberOfTodos();
    console.log(this.todoLength);
  }


  ngOnInit(): void {
  }



}
