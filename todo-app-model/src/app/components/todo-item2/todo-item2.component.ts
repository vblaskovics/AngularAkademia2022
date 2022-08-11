import { Component, Input, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-todo-item2',
  templateUrl: './todo-item2.component.html',
  styleUrls: ['./todo-item2.component.css']
})
export class TodoItem2Component implements OnInit {

  @Input() todo?: Todo;

  constructor() { }

  ngOnInit(): void {
  }

}
