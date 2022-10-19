import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/models/todo';
import { SortingService } from '../service/sorting.service';




@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  item?: Todo;

  constructor(public sortingService: SortingService) {
    this.sortingService.sortProgress();
  }

  ngOnInit(): void {}

  showTodoDetails(todo: Todo) {
    this.item = todo;
  }

}
