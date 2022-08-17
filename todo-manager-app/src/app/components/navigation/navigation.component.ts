import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/models/todo';
import { todosBasic } from 'src/app/todolist';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  @Input() count?: number
  // @Output() newTodo?: Todo = new EventEmitter<Todo>()

  todoTemplate: Todo

  constructor() { 
    this.todoTemplate= {id: 1, title: "This is sample todo", progress: "in progress", description: "This is a sample", date: "2022-08-17", user_id:1, subTodoIds: []}
  }

  ngOnInit(): void {
  }

  onAddTodo(formValue: any) {
    this.todoTemplate.id = todosBasic.length + 1;
    this.todoTemplate.title = formValue.newTodo
    console.log(formValue)
    let newObject = {...this.todoTemplate}
    todosBasic.push(newObject)
  }
}
