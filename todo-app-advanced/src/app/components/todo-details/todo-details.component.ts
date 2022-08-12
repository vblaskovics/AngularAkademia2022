import { Component, Input, OnInit } from '@angular/core';
import { Todo } from 'src/app/shared/todo';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css']
})
export class TodoDetailsComponent implements OnInit {
  @Input() todoItem?: Todo;


  constructor() { }

  ngOnInit(): void {
  }

}
