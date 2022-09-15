import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from 'src/app/models/todo';
import { User } from 'src/app/models/user';
import { TodoServiceService } from 'src/app/services/todo-service.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  progressState?: number 

  todos$?: Observable<Todo[]>
  users$?: Observable<User[]>

  constructor(private todoService: TodoServiceService) { }

  ngOnInit(): void {
    this.getTodos()
    this.getUsers()
  }

  changeListOfTodos() {

  }

  sortByProgress() {

  }

  getTodos() {
    this.todos$ = this.todoService.getTodos()
  }

  getUsers() {
    this.users$ = this.todoService.getUsers()
  }
}
