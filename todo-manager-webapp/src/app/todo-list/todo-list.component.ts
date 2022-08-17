import { VariableBinding } from '@angular/compiler';
import { Component, OnInit, Output } from '@angular/core';
import { count } from 'rxjs';
import { Todo } from '../model/todo';
import { Users } from '../model/users';
import { progress } from '../progress';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

@Output() todo: Todo[] = new Array();
user: Users[] = new Array();
isTodoSelected: boolean;
selectedTodo?: any;



constructor() {
  this.todo = [
    {id: 1, title: "Make a cookie", progress: "open", description: "Bake that Cookie", date: "2022.08.11", userId:3, },
    {id: 2, title: "Wash the dishes",progress: "done", description: "You know what to do", date: "2022.08.12", userId:1, },
    {id: 3, title: "Do the homework", progress: "in progress", description: "Thinking", date: "2022.08.15", userId: 1, },
    {id: 4, title: "Play games", progress: "open", description: "Play hard", date: "2022.08.13", userId: 2, },
    {id: 5, title: "Take a walk", progress: "done", description: "Just walk and take your time", date: "2022.08.14", userId: 2, },
  ]

  this.user =  [
    {id: 1, name: "Varga Norbert", email: "varga.norbert@gmail.com" },
    {id: 2, name: "Varga Tamás", email: "varga.tamas@gmail.com" },
    {id: 3, name: "Varga László", email: "varga.laszlo@gmail.com" },
  ]



  this.isTodoSelected = false;



  }

ngOnInit(): void {

  }

getUser(todo: Todo) {
  let user = this.user.find(user => user.id === todo.userId)
  return user
  }

selectTodo(todo: Todo): Todo {
  this.isTodoSelected = true;
  return this.selectedTodo = todo
  }



// countInProgress(): number {
//   let todoCounter = 0;
//   for (const todo of  {
//     if (todo.progress == progress ) {
//       todoCounter++;
//     }
//   }
//   return todoCounter;

}
