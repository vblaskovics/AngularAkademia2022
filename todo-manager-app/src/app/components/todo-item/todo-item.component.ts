import { Component, Input, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';
import { User } from 'src/app/models/user';

@Component({
  selector: '[app-todo-item]',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo?: Todo;
  @Input() user?: User;

  constructor() { }

  ngOnInit(): void {
  }

  changeProgress(todo: any): void{
    if(todo.progress === "open"){
      todo.progress = "in progress"
    } else if (todo.progress === "in progress"){
      todo.progress = "done"
    } else {
      todo.progress = "open"
    }
  }
}
