import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/models/todo';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  @Output() todos: Todo[] = new Array();
  @Output() users: User[] = new Array()

  isTodoSelected: boolean;
  @Output() selectedTodo?: Todo

  constructor() {
    this.todos = [
        {id: 1, title: "Do the home work", progress: "In progress", description: "Home work must be done this week, with no mistakes", date: "2022-08-12", user_id:1, subTodoIds: 6},
        {id: 2, title: "Clean the house", progress: "Done", description: "Everything must be clean", date: "2022-05-22", user_id:3, subTodoIds: 7},
        {id: 3, title: "Visit parents", progress: "Open", description: "You have to drive safe", date: "2022-04-15", user_id:2, subTodoIds: 8},
        {id: 4, title: "Wash the car", progress: "Open", description: "Interior and exterior", date: "2022-02-02", user_id:1, subTodoIds: 9},
        {id: 5, title: "Cook something", progress: "Done", description: "Ingredients: chicken, tomato, mushroom, etc..", date: "2022-07-19", user_id:3, subTodoIds: 10},
      ],
    this.users = [
      {id: 1, name: "Gergely Polonkai", email: "gergely.polonkai@t-systems.com"},
      {id: 2, name: "Zoltán Beke", email: "zoltan.beke@t-systems.com"},
      {id: 3, name: "Dietrich Márk", email: "dietrich.mark@t-systems.com"}
    ],
    this.isTodoSelected = false;
   }

  ngOnInit(): void {
  }

  // showDetails(todo: Todo): void {
  //   console.log(todo)
  //   this.isTodoSelected = true;
  //   this.selectedTodo.emit(todo)    
  // }
  selectTodo(todo: Todo) :void{
    this.selectedTodo = todo
    this.isTodoSelected = true;
  }

}
