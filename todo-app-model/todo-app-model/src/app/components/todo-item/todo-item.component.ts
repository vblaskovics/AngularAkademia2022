import { Component, Input, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo?: Todo ;

  constructor() {}

  ngOnInit(): void {
  }

}
