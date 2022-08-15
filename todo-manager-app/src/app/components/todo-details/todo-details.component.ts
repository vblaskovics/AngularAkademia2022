import { Component, OnInit, Input, Output } from '@angular/core';
import { User } from 'src/app/models/user';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css']
})
export class TodoDetailsComponent implements OnInit {

  @Input() user?: User;
  @Input() todo?: Todo;
  @Input() todos?: Todo[] = new Array()
  @Output() subTodo?: Todo;
 
  constructor() { }

  ngOnInit(): void {
  }

  getSubtodo(todoId: any) {
    let wantedSubTodo = this.todos?.find(todo => todo.id === todoId)
    console.log(wantedSubTodo)
    return wantedSubTodo?.title
  }



}
