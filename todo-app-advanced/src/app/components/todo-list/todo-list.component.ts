import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TodoDataService } from 'src/app/services/todo-data.service';
import { progress, Todo } from 'src/app/shared/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {

  colorGrey: boolean = false;
  signingIn?: boolean;

  sortedItems?: Todo[];

  constructor(public todoService: TodoDataService) {}

  ngOnInit(): void {}

  isSecond(item: Todo['id']) {
    if (item % 2 === 0) {
      return (this.colorGrey = true);
    } else return (this.colorGrey = false);
  }

  loggingInHandler(event: boolean) {
    this.signingIn = event;
  }
}
