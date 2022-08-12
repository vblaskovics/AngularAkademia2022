import { Component, Input, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css']
})
export class TodoDetailsComponent implements OnInit {

  @Input() selectedToDo?: Todo
  @Input() users?: User[]
  

  constructor() {}

  ngOnInit(): void {
  }

  findUserName(userId: any){
    let user = this.users?.find(user => {
      if (userId === user.id){
        console.log(userId, user.id)
        return user.name
      }
      return 
    })
    return user?.name
  }

  findUserEmail(userId: any){
    let user = this.users?.find(user => {
      if (userId === user.id){
        return true
      }
      return false
    })
    return user?.email
  }

}
