import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TodoDataService } from 'src/app/services/todo-data.service';
import { progress, Todo } from 'src/app/shared/todo';

@Component({
  selector: '[app-todo-item]',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {


  todo?: Todo;
  @Output()clickedElement: EventEmitter<Todo> = new EventEmitter<Todo>();
  @Output() deleteItemFromTable: EventEmitter<Todo> = new EventEmitter<Todo>();
  @Output() elementProgress: EventEmitter<Todo> = new EventEmitter<Todo>();

  isclicked: boolean = false;

  constructor(public todoService: TodoDataService) {
    console.log(this.todoService.todoItems);

  }

  ngOnInit(): void {}

  tableDataClicked() {
    this.clickedElement.emit(this.todo);

  }
  removeItem(){
    this.deleteItemFromTable.emit(this.todo)
  }
  changeTodoStatus(){
    this.elementProgress.emit(this.todo)
  }
}
