import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/shared/todo';

@Component({
  selector: '[app-todo-item]',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {


  @Input() todo?: Todo;
  @Output()clickedElement: EventEmitter<Todo> = new EventEmitter<Todo>();
  @Output() deleteItemFromTable: EventEmitter<Todo> = new EventEmitter<Todo>();

  isclicked: boolean = false;

  constructor() {

  }

  ngOnInit(): void {}

  tableDataClicked() {
    this.clickedElement.emit(this.todo);
  }
  removeItem(){
    this.deleteItemFromTable.emit(this.todo)
  }
}
