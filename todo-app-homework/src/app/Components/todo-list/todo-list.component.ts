import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { TODO } from 'src/app/Interfaces/todo.interface';
import { USER } from 'src/app/Interfaces/user.interface';
import { progress } from 'src/app/progress';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  @Input() todos!: TODO[];
  @Input() users!: USER[];
  @Output() selectTodoEmitter = new EventEmitter<TODO>();
  @Output() changeProgressStateEmmiter = new EventEmitter<TODO>();
  renderByProgressDown: boolean = false;
  inputs: string[];
  constructor() {
    this.inputs = ['id', 'title', 'progress', 'user name'];
  }

  ngOnInit(): void {}
  handleSelectClick(selectedTodo: TODO) {
    this.selectTodoEmitter.emit(selectedTodo);
  }
  onRenderByProgress(): void {
    //chad algoritmus
    /* for (let i = 0; i < this.todos.length; i++) {
      for (let j = i + 1; j <= this.todos.length; j++) {
        let todoStandBy: TODO;
        if (
          this.todos[i].progress != progress.open &&
          this.todos[j].progress == progress.open
        ) {
          todoStandBy = this.todos[i];
          this.todos[i] = this.todos[j];
          this.todos[j] = todoStandBy;
        }
        if (
          this.todos[i].progress != progress.open &&
          this.todos[i].progress != progress.done &&
          this.todos[j].progress == progress.done
        ) {
          todoStandBy = this.todos[i];
          this.todos[i] = this.todos[j];
          this.todos[j] = todoStandBy;
        }
      }
    } */
    //CSALO ALGORITMUS
    /* let openTodos = this.todos.filter(todo=> todo.progress == progress.open)
    let inProgressTodos = this.todos.filter(todo=> todo.progress == progress.inProgress)
    let doneTodos = this.todos.filter(todo=> todo.progress == progress.done)
    this.renderByProgressDown = !this.renderByProgressDown;

    if(this.renderByProgressDown){
      this.todos = openTodos.concat(inProgressTodos, doneTodos)
    }else{
      this.todos = doneTodos.concat(inProgressTodos, openTodos)
    } */
    /* For I = 0 to N - 2
       For J = 0 to N - 2
         If (A(J) > A(J + 1)
           Temp = A(J)
           A(J) = A(J + 1)
           A(J + 1) = Temp
         End-If
       End-For
     End-For*/
    /* for (let i = 0; i < this.todos.length ; i++) {
    let Smallsub = i
    for (let j = i + 1; j < this.todos.length; j++) {
      if(this.todos[i].progress == progress.inProgress && this.todos[j].progress == progress.open){

      }
      console.log(this.todos[i].id,this.todos[j].id)
      
    }
    
  } */
    for (let i = 0; i < this.todos.length; i++) {
      for (let j = 0; j < this.todos.length - i - 1; j++) {
        
        if(!this.renderByProgressDown){
          if (
            this.todos[j].progress != progress.inProgress &&
            this.todos[j + 1].progress == progress.inProgress
          ) {
            let temp = this.todos[j];
            this.todos[j] = this.todos[j + 1];
            this.todos[j + 1] = temp;
          }
          if (
            this.todos[j].progress != progress.open &&
            this.todos[j + 1].progress == progress.open
          ) {
            let temp = this.todos[j];
            this.todos[j] = this.todos[j + 1];
            this.todos[j + 1] = temp;
          }
        }else{
          if (
            this.todos[j].progress != progress.inProgress &&
            this.todos[j + 1].progress == progress.inProgress
          ) {
            let temp = this.todos[j];
            this.todos[j] = this.todos[j + 1];
            this.todos[j + 1] = temp;
          }
          if (
            this.todos[j].progress != progress.done &&
            this.todos[j + 1].progress == progress.done
          ) {
            let temp = this.todos[j];
            this.todos[j] = this.todos[j + 1];
            this.todos[j + 1] = temp;
          }
        }
      }
    }
    this.renderByProgressDown = !this.renderByProgressDown

  }
}
