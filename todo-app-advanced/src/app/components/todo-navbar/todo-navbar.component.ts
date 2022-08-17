import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/shared/todo';
import { __values } from 'tslib';

@Component({
  selector: 'app-todo-navbar',
  templateUrl: './todo-navbar.component.html',
  styleUrls: ['./todo-navbar.component.css']
})
export class TodoNavbarComponent implements OnInit {

  @Input() numberofTodos?: number;
  @Output() title: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(formValue: any){
    this.title.emit(formValue.title);
  }
}
