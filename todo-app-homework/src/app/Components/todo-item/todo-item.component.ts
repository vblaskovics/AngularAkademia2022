import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TODO } from 'src/app/Interfaces/todo.interface';
import { USER } from 'src/app/Interfaces/user.interface';
@Component({
  selector: '[app-todo-item]',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo!:TODO
  @Input() users!:USER[]
  constructor() { }

  ngOnInit(): void {
    console.log(this.todo)
  }
  findUserById(id: number) {
    let i = 0;
    while (i < this.users.length && id !== this.users[i].id) {
      i++;
    }
    return i < this.users.length && this.users[i].name;
  }

}
