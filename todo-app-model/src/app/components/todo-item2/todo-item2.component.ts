import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-todo-item2',
  templateUrl: './todo-item2.component.html',
  styleUrls: ['./todo-item2.component.css'],
})
export class TodoItem2Component implements OnInit {
  @Input() todo?: Todo;
  @Output() deleteMe: EventEmitter<Todo> = new EventEmitter<Todo>();

  constructor() {}

  ngOnInit(): void {}

  clickDelete(): void {
    this.deleteMe.emit(this.todo);
  }

  clickDeleteSub(todo: Todo): void {
    if (!this.todo?.subToDos) return;
    this.todo.subToDos = this.todo.subToDos?.filter((t) => t.id !== todo.id);
  }
}