import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { TODO } from 'src/app/Interfaces/todo.interface';
import { USER } from 'src/app/Interfaces/user.interface';
import { progress } from 'src/app/progress';
import { TodosService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  /*   @Input() todos!: TODO[];
   */ /*   @Input() users!: USER[];
   */ /*   @Output() selectTodoEmitter = new EventEmitter<TODO>();
   */ /*   @Output() changeProgressStateEmmiter = new EventEmitter<TODO>();
   */ todos$: Observable<TODO[]>;
  renderByProgressDown: boolean = false;
  inputs: string[];
  constructor(private todoService: TodosService) {
    this.todos$ = this.todoService.todos$;
    this.inputs = ['id', 'title', 'progress', 'user name'];
  }

  ngOnInit(): void {}
  handleSelectClick(selectedTodo: TODO) {
    /*     this.selectTodoEmitter.emit(selectedTodo);
     */
    this.todoService.showDetailOfTodo(selectedTodo);
  }
  onRenderByProgress() {
    this.renderByProgressDown = !this.renderByProgressDown;
  }
  renderProgress(todos: TODO[] | null): TODO[] | null {
    if (todos) {
      const valueOfProgress = (progress: string) => {
        switch (progress) {
          case 'open':
            return 0;
            break;
          case 'in progress':
            return 1;
            break;
          case 'done':
            return 2;
            break;
          default:
            return 0;
            break;
        }
      };
      /*  for (let i = 0; i < todos.length; i++) {
        for (let j = 0; j < todos.length - i - 1; j++) {
          if (!this.renderByProgressDown) {
            if (
              valueOfProgress(todos[j].progress) >
              valueOfProgress(todos[j + 1].progress)
            ) {
              let temp = todos[j];
              todos[j] = todos[j + 1];
              todos[j + 1] = temp;
            }
          } else {
            if (
              valueOfProgress(todos[j].progress) <
              valueOfProgress(todos[j + 1].progress)
            ) {
              let temp = todos[j];
              todos[j] = todos[j + 1];
              todos[j + 1] = temp;
            }
          }
        }
      } */
      return todos;
    } else {
      return null;
    }
  }
  /*  onRenderByProgress(): void {
    const valueOfProgress = (progress: string) => {
      switch (progress) {
        case 'open':
          return 0;
          break;
        case 'in progress':
          return 1;
          break;
        case 'done':
          return 2;
          break;
        default:
          return 0;
          break;
      }
    };
    for (let i = 0; i < this.todos.length; i++) {
      for (let j = 0; j < this.todos.length - i - 1; j++) {
        if (!this.renderByProgressDown) {
          if (
            valueOfProgress(this.todos[j].progress) >
            valueOfProgress(this.todos[j + 1].progress)
          ) {
            let temp = this.todos[j];
            this.todos[j] = this.todos[j + 1];
            this.todos[j + 1] = temp;
          }
        } else {
          if (
            valueOfProgress(this.todos[j].progress) <
            valueOfProgress(this.todos[j + 1].progress)
          ) {
            let temp = this.todos[j];
            this.todos[j] = this.todos[j + 1];
            this.todos[j + 1] = temp;
          }
        }
      }
    }
    this.renderByProgressDown = !this.renderByProgressDown;
  } */
}
