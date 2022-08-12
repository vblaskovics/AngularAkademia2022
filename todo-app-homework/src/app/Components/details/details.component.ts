import { Component, Input, OnInit } from '@angular/core';
import { USER } from 'src/app/Interfaces/user.interface';
import { TODO } from 'src/app/Interfaces/todo.interface';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  @Input() todo!:TODO
  @Input() users!:USER[]
  constructor() { }

  ngOnInit(): void {
  }
  selectedUserName(userId:number){
    let i = 0
    while(i < this.users.length && this.users[i].id !== userId){
      i++
    }
    return i < this.users.length && this.users[i].name
  }
  selectedUserEmail(userId:number){
    let i = 0
    while(i < this.users.length && this.users[i].id !== userId){
      i++
    }
    return i < this.users.length && this.users[i].email
  }
}
