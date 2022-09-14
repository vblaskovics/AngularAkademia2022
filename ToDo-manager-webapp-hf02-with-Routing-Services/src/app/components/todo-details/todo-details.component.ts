import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo, progress } from 'src/app/models/todo';


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

  
  // detailsProgressChange(todo: Todo){
  //   const todoIndex = this.todoItem.indexOf(todo);
  //   if (this.todoItem[todoIndex].progress === progress.Open) {
  //     this.todoItem[todoIndex].progress = progress.InProgress;
  //   }
  //    else if(this.todoItem[todoIndex].progress === progress.InProgress) {
  //     this.todoItem[todoIndex].progress = progress.Done;
  //   }
  //    else if (this.todoItem[todoIndex].progress === progress.Done) {
  //     this.todoItem[todoIndex].progress = progress.Open;
  //   }
  // }

}