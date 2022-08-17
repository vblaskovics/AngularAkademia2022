import { Component, OnInit, Output, EventEmitter, OnChanges } from '@angular/core';
import { Todo } from 'src/app/models/todo';
import { User } from 'src/app/models/user';
import { todosBasic, usersBasic } from 'src/app/todolist';
import { todos2, users2 } from 'src/app/todo2list';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  @Output() todos: Todo[] = new Array();
  users: User[] = new Array();
  isTodoSelected: boolean;
  selectedTodo?: any;
  @Output() inProgressCounter?: number;
  numberOfInProgress?: number
  progressState :number
  todosList1: boolean;

  @Output() numberOfProgress = new EventEmitter<number>()

  constructor() { 
    this.todos = todosBasic,
    this.users = usersBasic,
    this.isTodoSelected = false,
    this.inProgressCounter = 0,
    this.progressState = 0;
    this.todosList1 = true;
  }

  ngOnInit(): void {
    this.getNumberOfInprogressTodos()
  }

  getUser(todo: Todo) {
    let user = this.users.find(user => user.id === todo.user_id)
    return user
  }

  selectTodo(todo: Todo): Todo {
    this.isTodoSelected = true;
    return this.selectedTodo = todo
  }

  getNumberOfInprogressTodos(){
    let counter = 0
    console.log("counter fv")
    this.todos.forEach(todo => {
      if(todo.progress === "in progress") {
        counter++
      }
    })
    this.numberOfProgress.emit(counter)    
    return counter
  }

  sortByProgress(){
    if(this.progressState === 0 || this.progressState === 1){
      this.todos.sort((a,b) => (a.progress> b.progress) ? 1 : ((b.progress > a.progress) ? -1 : 0))
      this.progressState = 2;
      console.log(this.progressState)
    } else if (this.progressState === 0 || this.progressState === 2){
      this.todos.sort((a,b) => (a.progress> b.progress) ? -1 : ((b.progress > a.progress) ? 1 : 0))
      this.progressState = 1;
      console.log(this.progressState)
    }
  }

  updateTodo(event: Todo) {
    this.getNumberOfInprogressTodos()
  }

  changeListOfTodos(): void {
    if(!this.todosList1){
      this.todos = todosBasic;
      this.users = usersBasic
      this.todosList1 = true;
    } else {
      this.todos = todos2;
      this.users = users2
      this.todosList1 = false;
    }
    this.getNumberOfInprogressTodos()
  }
}
