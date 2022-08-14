import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subtodo } from 'src/app/users-model/subtodo';
import { Todo } from 'src/app/users-model/todo';

@Component({
  selector: '[app-todo-item]',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
 @Input() todoItem!: Todo;
 @Output() subTodo!: EventEmitter<Subtodo>;

  constructor() {
  }

  ngOnInit(): void {
  }

  showTodoDetails(subTodoIds: number[]) {
    this.subTodo.emit();

  }

}
