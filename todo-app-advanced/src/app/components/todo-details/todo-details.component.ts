import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/shared/todo';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css']
})
export class TodoDetailsComponent implements OnInit {
  @Input() todoItem?: Todo;
  @Output() closeItem: EventEmitter<boolean> = new EventEmitter<boolean>();
  closed: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }
  onClickClose(){
    this.closeItem.emit(this.closed);
    console.log(this.closeItem)
  }

}
