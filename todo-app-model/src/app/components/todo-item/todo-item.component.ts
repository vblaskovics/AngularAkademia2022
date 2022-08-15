import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo?: Todo;
  @Output() deleteItemEvent: EventEmitter<Todo> = new EventEmitter<Todo>();

  constructor() {
  }

  onDeleteItem(): void {
    this.deleteItemEvent.emit(this.todo);
  }

  ngOnInit(): void {
  }

}
