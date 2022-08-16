import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/models/todo';
import { User } from 'src/app/models/user';

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

  @Output() numberOfProgress = new EventEmitter<number>()

  constructor() { 
    this.todos = [
      {id: 1, title: "Do the home work", progress: "in progress", description: "Home work must be done this week, with no mistakes", date: "2022-08-12", user_id:1, subTodoIds: [9]},
      {id: 2, title: "Clean the house", progress: "done", description: "Everything must be clean", date: "2022-05-22", user_id:3, subTodoIds: []},
      {id: 3, title: "Visit parents", progress: "open", description: "You have to drive safe", date: "2022-04-15", user_id:2, subTodoIds: []},
      {id: 4, title: "Wash the car", progress: "open", description: "Interior and exterior", date: "2022-02-02", user_id:1, subTodoIds: [7, 10]},
      {id: 5, title: "Cook something", progress: "done", description: "Ingredients: chicken, tomato, mushroom, etc..", date: "2022-07-19", user_id:3, subTodoIds: [6,8]},
      {id: 6, title: "Wash hands", progress: "open", description: "valami description", date: "2022-11-19", user_id:3, subTodoIds: []},
      {id: 7, title: "Change front bulbs", progress: "in progress", description: "valami description valami description", date: "2022-04-19", user_id:1, subTodoIds: []},
      {id: 8, title: "Prepare the vegetables", progress: "done", description: "valami description valami description valami description", date: "2022-03-12", user_id:3, subTodoIds: []},
      {id: 9, title: "Write a template", progress: "done", description: "valami description", date: "2022-07-12", user_id:1, subTodoIds: []},
      {id: 10, title: "Clean the carpets", progress: "open", description: "valami description valami description", date: "2022-05-01", user_id:1, subTodoIds: []},
    ],
    this.users = [
      {id: 1, name: "Gergely Polonkai", email: "gergely.polonkai@t-systems.com"},
      {id: 2, name: "Zoltán Beke", email: "zoltan.beke@t-systems.com"},
      {id: 3, name: "Dietrich Márk", email: "dietrich.mark@t-systems.com"}
    ],
    this.isTodoSelected = false,
    this.inProgressCounter = 0,
    this.progressState = 0;
    // this.numberOfInProgress = this.getNumberOfInprogressTodos()

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
    // this.todos.find(todo => {
    //   if(todo.id === event.id){
        
    //   }
    // })
  }
}
