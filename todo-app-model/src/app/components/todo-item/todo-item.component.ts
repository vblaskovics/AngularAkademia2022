import { Component, Input, OnInit } from '@angular/core';
<<<<<<< HEAD
=======
import { TitleStrategy } from '@angular/router';
>>>>>>> 7d99ba94b13527368e1a2a93686137e8203437a4
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo?: Todo;

<<<<<<< HEAD
  constructor() {}
=======
  constructor() {
  }
>>>>>>> 7d99ba94b13527368e1a2a93686137e8203437a4

  ngOnInit(): void {}
}
