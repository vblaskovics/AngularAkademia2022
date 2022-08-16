import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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

  constructor() {}

  ngOnInit(): void {}

  showTodoDetails(subTodoIds: number[]) {
    this.subTodo.emit();
  }

  nextProgress() {
    let nextProgress;
    if (this.todoItem.progress == Progress.OPEN) {
      nextProgress = Progress.IN_PROGRESS;
    } else if (this.todoItem.progress == Progress.IN_PROGRESS) {
      nextProgress = Progress.DONE;
    } else {
      nextProgress = Progress.OPEN;
    }
    this.todoItem.progress = nextProgress;
  }
}
