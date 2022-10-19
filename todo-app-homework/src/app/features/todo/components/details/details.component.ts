import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { USER } from 'src/app/Interfaces/user.interface';
import { TODO } from 'src/app/Interfaces/todo.interface';
import { Observable, Subject, Subscription } from 'rxjs';
import { TodosService } from 'src/app/services/todos.service';
import { UsersService } from 'src/app/services/users.service';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit, OnDestroy {
  currentTodo?: TODO;
  currentTodoSub: Subscription;
  constructor(
    private todoService: TodosService,
    private userService: UsersService
  ) {
    this.currentTodoSub = todoService.currentDetail$.subscribe(
      (x: TODO | undefined) => {
        this.currentTodo = x;
      }
    );
  }
  getUser(id: number): Observable<USER> {
    return this.userService.getUserFromId(id);
  }
  getTodoFromId(id: number): Observable<TODO> {
    return this.todoService.getTodo(id);
  }
  ngOnDestroy(): void {
    this.currentTodoSub.unsubscribe();
  }
  changeProgressState(todoId: number) {
    this.todoService.changeProgressState(todoId);
  }
  ngOnInit(): void {}
  /*   selectedUserName(userId: number) {
    let i = 0;
    while (i < this.users.length && this.users[i].id !== userId) {
      i++;
    }
    return i < this.users.length && this.users[i].name;
  }
  selectedUserEmail(userId: number) {
    let i = 0;
    while (i < this.users.length && this.users[i].id !== userId) {
      i++;
    }
    return i < this.users.length && this.users[i].email;
  }
  findTodoTitleById(id: number) {
    let i = 0;
    while (i < this.todos.length && this.todos[i].id !== id) {
      i++;
    }
    return i < this.todos.length && this.todos[i].title;
  } */
}
