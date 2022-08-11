import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-sub-todo-item',
  templateUrl: './sub-todo-item.component.html',
  styleUrls: ['./sub-todo-item.component.css']
})
export class SubTodoItemComponent implements OnInit {

  @Input() todo?: Todo;
  @Output() deleteMe: EventEmitter<Todo> = new EventEmitter<Todo>();

  constructor() { }

  ngOnInit(): void {
  }

  clickDelete(){
    this.deleteMe.emit(this.todo);
  }

  deleteItem(t: Todo): void {
    if(!this.todo?.subTodos)
    return
    this.todo.subTodos = this.todo.subTodos?.filter( i => i.id !== t.id);
  }

}
