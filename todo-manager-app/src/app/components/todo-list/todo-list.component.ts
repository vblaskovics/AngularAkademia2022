import { Component, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/models/todo';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  @Output() todos: Todo[] = new Array()
  users: User[] = new Array()
  isTodoSelected: boolean
  selectedTodo?: any

  constructor() { 
    this.todos = [
      {id: 1, title: "Do the home work", progress: "in progress", description: "Home work must be done this week, with no mistakes", date: "2022-08-12", user_id:1, subTodoIds: 6},
      {id: 2, title: "Clean the house", progress: "done", description: "Everything must be clean", date: "2022-05-22", user_id:3, subTodoIds: 7},
      {id: 3, title: "Visit parents", progress: "open", description: "You have to drive safe", date: "2022-04-15", user_id:2, subTodoIds: 8},
      {id: 4, title: "Wash the car", progress: "open", description: "Interior and exterior", date: "2022-02-02", user_id:1, subTodoIds: 9},
      {id: 5, title: "Cook something", progress: "done", description: "Ingredients: chicken, tomato, mushroom, etc..", date: "2022-07-19", user_id:3, subTodoIds: 10},
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

  getUser(todo: Todo) {
    let user = this.users.find(user => user.id === todo.user_id)
    return user
  }

  selectTodo(todo: Todo): Todo {
    this.isTodoSelected = true;
    return this.selectedTodo = todo
  }

  
}
