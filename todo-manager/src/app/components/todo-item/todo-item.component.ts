import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TodoService } from 'src/app/service/todo.service';
import { Progress } from 'src/app/users-model/progress-enum';
import { Subtodo } from 'src/app/users-model/subtodo';
import { Todo } from 'src/app/users-model/todo';

@Component({
  selector: '[app-todo-item]',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  @Input() todoItem!: Todo;
  @Output() subTodo!: EventEmitter<Subtodo>;
  @Input() subtodoTitle!: Subtodo;

  constructor(public todoService: TodoService) {

  }

  ngOnInit(): void {}

  showTodoDetails(subTodoIds: number[]) {
    this.subTodo.emit();
  }

  nextProgress() {
    this.todoService.nextProgress(this.todoItem);
  }
}
