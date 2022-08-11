import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-todo-subitems',
  templateUrl: './todo-subitems.component.html',
  styleUrls: ['./todo-subitems.component.css']
})
export class TodoSubitemsComponent implements OnInit {

  @Input() subtodo?: Todo;

  constructor() { }

  ngOnInit(): void {
  }

}
