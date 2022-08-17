import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { progress, Todo } from 'src/app/models/todo';


@Component({
  selector: '[app-todo-item]',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {

  @Input() todo?: Todo;
  @Output()clickedItem: EventEmitter<Todo> = new EventEmitter<Todo>();
  @Input() status?: progress;
  @Output() todoInProgress: EventEmitter<Todo> = new EventEmitter<Todo>();


  constructor() { }

  ngOnInit(): void {}


  onCellClick() {
    this.clickedItem.emit(this.todo);
  }

  onSelectStatus(){
    this.todoInProgress.emit(this.todo)
  }

  onChangeStatus(){
    this.todoInProgress.emit(this.todo)
  }

 
}




