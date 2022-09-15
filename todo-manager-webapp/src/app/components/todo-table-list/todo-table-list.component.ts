import { Observable } from 'rxjs';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { tick } from '@angular/core/testing';
import { Progress, Todo } from 'src/app/models/todo-model';
import { User } from 'src/app/models/user-model';
import { TodoServiceService } from 'src/app/services/todo-service.service';

@Component({
  selector: 'app-todo-table-list',
  templateUrl: './todo-table-list.component.html',
  styleUrls: ['./todo-table-list.component.css'],
})
export class TodoTableListComponent implements OnInit {
  todo$?: Observable<Todo[]>;
  users$?: Observable<User[]>;

  // @Output() items: Todo[] = new Array();

  // @Output() users: User[] = new Array();

  // @Output() clickedTodo?: Todo;

  // @Output() signInClicked = new EventEmitter<boolean>();

  isTodoClicked: boolean = false;
  ascending: boolean = false;

  // @Output() countInProgress = new EventEmitter<number>();

  constructor(private todoService: TodoServiceService) {}

  ngOnInit(): void {
    this.getTodos();
    this.getUsers();
  }

  // clickShow(todo: Todo): void {
  //   this.clickedTodo = todo;
  //   this.isTodoClicked = true;
  // }

  // calculateProgressCount(): number {
  //   return (this.count = this.items.filter(
  //     (x) => x === Progress.in_progress
  //   ).length);
  // }

  // calculateProgressCount(): number {
  //   let count = 0;
  //   this.items.forEach((todo) => {
  //     if (todo.progress === 'in progress') {
  //       count++;
  //     }
  //   });
  //   this.countInProgress.emit(count);
  //   return count;
  // }

  // calculateProgressCount(): number {
  //   let count = 0;
  //   this.items.forEach((todo) => {
  //     if (todo.progress === Progress.in_progress) {
  //       count++;
  //     }
  //   });
  //   return count;
  // }

  changeProgress(todo: Todo): void {
    switch (todo.progress) {
      case Progress.open:
        todo.progress = Progress.in_progress;
        break;
      case Progress.in_progress:
        todo.progress = Progress.done;
        break;
      case Progress.done:
        todo.progress = Progress.open;
        break;
      default:
        console.log('No such progress exists!');
        break;
    }
  }

  // sortProgress() {
  //   if (this.ascending === false) {
  //     this.items.sort((a, b) =>
  //       a.progress! > b.progress! ? 1 : b.progress! > a.progress! ? -1 : 0
  //     );
  //     this.ascending = true;
  //   } else {
  //     this.items.sort((a, b) =>
  //       a.progress! > b.progress! ? -1 : b.progress! > a.progress! ? 1 : 0
  //     );
  //     this.ascending = false;
  //   }
  // }

  // onSignInPressed(status: boolean) {
  //   this.signInClicked.emit(status);
  // }

  getTodos() {
    this.todo$ = this.todoService.listItems();
  }
  getUsers() {
    this.users$ = this.todoService.listUsers();
  }
}
