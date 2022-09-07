import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  isBasicTodoListType: boolean = true;
  
  todosBasic : Todo[]= [
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
  ]

  usersBasic: User[] = [
    {id: 1, name: "Gergely Polonkai", email: "gergely.polonkai@t-systems.com"},
    {id: 2, name: "Zoltán Beke", email: "zoltan.beke@t-systems.com"},
    {id: 3, name: "Dietrich Márk", email: "dietrich.mark@t-systems.com"}
  ]

  todos2 : Todo[]= [
    {id: 1, title: "valami", progress: "in progress", description: "Home work must be done this week, with no mistakes", date: "2022-08-12", user_id:3, subTodoIds: [9]},
    {id: 2, title: "asdasdsad", progress: "done", description: "Everything must be clean", date: "2022-05-22", user_id:2, subTodoIds: []},
    {id: 3, title: "asdasdasd", progress: "open", description: "You have to drive safe", date: "2022-04-15", user_id:1, subTodoIds: []},
    {id: 4, title: "asdasdwqdqwc", progress: "in progress", description: "Interior and exterior", date: "2022-02-02", user_id:1, subTodoIds: [7, 10]},
    {id: 5, title: "Cook rebterbterbting", progress: "done", description: "Ingredients: chicken, tomato, mushroom, etc..", date: "2022-07-19", user_id:3, subTodoIds: [6,8]},
    {id: 6, title: "Wash ervtercthands", progress: "open", description: "valami description", date: "2022-11-19", user_id:3, subTodoIds: []},
    {id: 7, title: "extertertretres", progress: "open", description: "valami description valami description", date: "2022-04-19", user_id:2, subTodoIds: []},
    {id: 8, title: "Pertertxertcers", progress: "in progress", description: "valami description valami description valami description", date: "2022-03-12", user_id:3, subTodoIds: []},
    {id: 9, title: "erftde", progress: "open", description: "valami description", date: "2022-07-12", user_id:3, subTodoIds: []},
    {id: 10, title: "chercs", progress: "in progress", description: "valami description valami description", date: "2022-05-01", user_id:2, subTodoIds: []},
  ]

  users2: User[] = [
    {id: 1, name: "Gergely Polonkai", email: "gergely.polonkai@t-systems.com"},
    {id: 2, name: "Zoltán Beke", email: "zoltan.beke@t-systems.com"},
    {id: 3, name: "Dietrich Márk", email: "dietrich.mark@t-systems.com"}
  ]

  constructor() { }

  changeTodoListType(): boolean {
    return this.isBasicTodoListType = !this.isBasicTodoListType
  }

  numberOfInProgessTodos(){
    let number = 0;
    if(this.isBasicTodoListType){
      this.todosBasic.forEach(todo => {
        if(todo.progress === 'in progress'){
          number++
        }
      }) 
    } else {
      this.todos2.forEach(todo => {
        if(todo.progress === 'in progress'){
          number++
        }
      }) 
    }
    return number
  }


}
