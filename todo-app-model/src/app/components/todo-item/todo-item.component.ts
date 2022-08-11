import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo!:Todo
  @Input() todos!:Todo[]
  @Output() deleteMe: EventEmitter<Todo> = new EventEmitter<Todo>()
  constructor() {
    
   }

  ngOnInit(): void {
  }
  handleDestroy(){
    let i = 0
    while(i < this.todos.length && this.todos[i].id !== this.todo.id){
      i++
    }
    if(i < this.todos.length)this.todos.splice(i, 1)
  }
  clickDelete(){
    this.deleteMe.emit(this.todo)
  }
  handleDeleteMe(todo:Todo){
    this.todo.sublist = this.todo.sublist?.filter(i => i.id !== todo.id)
  }
}
