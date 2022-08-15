import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/models/user';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css']
})
export class TodoDetailsComponent implements OnInit {

  @Input() user?: User;
  @Input() todo?: Todo;

  constructor() { }

  ngOnInit(): void {
  }

}
