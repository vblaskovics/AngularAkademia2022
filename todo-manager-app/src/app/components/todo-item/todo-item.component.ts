import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/models/todo';
import { User } from 'src/app/models/user';

@Component({
  selector: '[app-todo-item]',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo?: Todo
  @Input() users?: User[]

  @Output() selectMe = new EventEmitter<Todo>()

  constructor() {}

  ngOnInit(): void {
  }

  findUser(userId: any){
    let user = this.users?.find(user => {
      if (userId === user.id){
        return user.name
      }
      return 
    })
    return user?.name
  }

  showDetails(): void{
    this.selectMe.emit(this.todo);
  }
}


