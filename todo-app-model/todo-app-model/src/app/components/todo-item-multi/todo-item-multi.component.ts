import { Component, Input, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-todo-item-multi',
  templateUrl: './todo-item-multi.component.html',
  styleUrls: ['./todo-item-multi.component.css']
})
export class TodoItemMultiComponent implements OnInit {
  @Input() todo?: Todo;

  constructor() { }

  ngOnInit(): void {
  }

}
