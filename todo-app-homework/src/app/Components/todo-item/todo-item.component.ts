import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { TODO } from 'src/app/Interfaces/todo.interface';
import { USER } from 'src/app/Interfaces/user.interface';
import { TodosService } from 'src/app/services/todos.service';
import { UsersService } from 'src/app/services/users.service';
@Component({
  selector: '[app-todo-item]',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo!: TODO;

  constructor(
    private userService: UsersService,
    private todoService: TodosService
  ) {}

  ngOnInit(): void {}
  findUser(userId: number): Observable<USER> {
    return this.userService.getUserFromId(userId);
  }
  changeProgressState(todoId: number) {
    this.todoService.changeProgressState(todoId);
  }
}
