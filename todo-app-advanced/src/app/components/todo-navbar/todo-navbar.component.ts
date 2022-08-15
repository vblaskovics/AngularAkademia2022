import { Component, Input, OnInit } from '@angular/core';
import { Todo } from 'src/app/shared/todo';

@Component({
  selector: 'app-todo-navbar',
  templateUrl: './todo-navbar.component.html',
  styleUrls: ['./todo-navbar.component.css']
})
export class TodoNavbarComponent implements OnInit {

  @Input() numberofTodos?: number;

  constructor() { }

  ngOnInit(): void {
  }

}
