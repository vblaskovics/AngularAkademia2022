import { Todo } from './../../models/todo';
import { TodoService } from 'src/app/shared/todo.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';



@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css']
})
export class TodoDetailsComponent implements OnInit {
  @Input() todoItem?: Todo;
  closingFunction: boolean = true;
  @Output() todoInProgressDetails: EventEmitter<Todo> = new EventEmitter<Todo>();
  // todoDetails!: Todo

  constructor(public TodoService: TodoService) { }

  ngOnInit(): void {
  }

  onCloseButton(){
    this.TodoService.closeDetails(this.closingFunction)
  }

  onSelectStatusDetails(){
    // console.log('Működik a kattintás - child comp!')
    // this.todoInProgressDetails.emit(this.todoItem);
    this.TodoService.actualProgressItemDetails;
  }

  
}