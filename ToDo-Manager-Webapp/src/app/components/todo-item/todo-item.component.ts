import { Component, Input, OnInit } from '@angular/core';
import { ToDo } from 'src/app/model/to-do';
import { User } from 'src/app/model/user';

@Component({
  selector: '[app-todo-item]',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo?: ToDo;
  @Input() user?: User;

  constructor() { }

  ngOnInit(): void {
  }

}
