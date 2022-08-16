import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/models/todo';


@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css']
})
export class TodoDetailsComponent implements OnInit {
  @Input() todoItem?: Todo;
  @Output() closedItem: EventEmitter<boolean> = new EventEmitter<boolean>();
  closingFunction: boolean = true;
  @Output() todoInProgressDetails: EventEmitter<Todo> = new EventEmitter<Todo>();

  constructor() { }

  ngOnInit(): void {
  }

  onCloseButton(){
    this.closedItem.emit(this.closingFunction);
  }

  onSelectStatusDetails(){
    console.log('Működik a kattintás - child comp!')
    this.todoInProgressDetails.emit(this.todoItem);
  }
  

}