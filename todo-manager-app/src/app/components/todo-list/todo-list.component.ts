import { Component, OnInit, Output, EventEmitter, OnChanges } from '@angular/core';
import { Todo } from 'src/app/models/todo';
import { User } from 'src/app/models/user';

import { initializeApp } from "firebase/app";
import { TodoService } from 'src/app/services/todo.service';

const firebaseConfig = {
  apiKey: "AIzaSyDXI8OKa1-HOhvmfVoVrY5U92Mp_WBgNc4",
  authDomain: "angular-todo-46213.firebaseapp.com",
  databaseURL: "https://angular-todo-46213-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "angular-todo-46213",
  storageBucket: "angular-todo-46213.appspot.com",
  messagingSenderId: "434235611430",
  appId: "1:434235611430:web:ff1542036eb0a9ea9a49e7"
};

const app = initializeApp(firebaseConfig);

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos: Todo[] = new Array();
  users: User[] = new Array();

  isTodoSelected: boolean;
  selectedTodo?: any;
  progressState :number
  todosList1: boolean;

  constructor(private todoService: TodoService) { 
    this.todos = this.todoService.todosBasic,
    this.users = this.todoService.usersBasic,
    this.isTodoSelected = false,
    this.progressState = 0;
    this.todosList1 = true;
  }

  ngOnInit(): void {
    
  }
  

  getUser(todo: Todo) {
    let user = this.users.find(user => user.id === todo.user_id)
    return user
  }

  selectTodo(todo: Todo): Todo {
    this.isTodoSelected = true;
    return this.selectedTodo = todo
  }

  sortByProgress(){
    if(this.progressState === 0 || this.progressState === 1){
      this.todos?.sort((a,b) => (a.progress> b.progress) ? 1 : ((b.progress > a.progress) ? -1 : 0))
      this.progressState = 2;
      console.log(this.progressState)
    } else if (this.progressState === 0 || this.progressState === 2){
      this.todos?.sort((a,b) => (a.progress> b.progress) ? -1 : ((b.progress > a.progress) ? 1 : 0))
      this.progressState = 1;
      console.log(this.progressState)
    }
  }

  changeListOfTodos(): void {
    if(!this.todosList1){
      this.todos = this.todoService.todosBasic;
      this.users = this.todoService.usersBasic
      this.todosList1 = this.todoService.changeTodoListType()
    } else {
      this.todos = this.todoService.todos2;
      this.users = this.todoService.users2
      this.todosList1 = this.todoService.changeTodoListType()
    }
  }
}