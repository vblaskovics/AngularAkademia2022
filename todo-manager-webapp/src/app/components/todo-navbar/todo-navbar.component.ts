import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-navbar',
  templateUrl: './todo-navbar.component.html',
  styleUrls: ['./todo-navbar.component.css'],
})
export class TodoNavbarComponent implements OnInit {
  @Input() progressCounter: number = 0;

  constructor() {}

  ngOnInit(): void {}
}
