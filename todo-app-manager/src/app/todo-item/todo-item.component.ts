import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SubTodo } from '../models/sub-todo';
import { Todo } from '../models/todo';
import { Progress } from '../models/progress';
import { SortingService } from '../service/sorting.service';


@Component({
  selector: '[app-todo-item]',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todoItem!: Todo;
  @Output() subTodo!: EventEmitter<SubTodo>;
  @Input() subTodos!: SubTodo;

  constructor(public sortingService: SortingService) {}

  ngOnInit(): void {

  }

  showTodoDetails(subTodoIds: number[]) {
    this.subTodo.emit();
  }

  nextProgress() {
    this.sortingService.nextInProgress(this.todoItem);
  }



}
