import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo, progress } from 'src/app/models/todo';
import { TodoService } from 'src/app/shared/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  providers:[ TodoService ]
})
export class TodoListComponent implements OnInit {

  items!: Todo[];
  todoSelected?: Todo;
  wichElementSelected;


  constructor(public todoService: TodoService) { 
    this.wichElementSelected = this.todoService.wichElementSelected
    

  }

  ngOnInit(): void {
    this.items = this.todoService.items;
  }

  onSelectedItem(todo: Todo){
    this.todoService.onSelectedItem(todo)
  }


  actualProgressItemDetails(todo: Todo) {
    const todoIndex = this.items.indexOf(todo);
    if (this.items[todoIndex].progress === progress.Open){
      this.items[todoIndex].progress === progress.InProgress;
    }
      else if(this.items[todoIndex].progress === progress.InProgress){
        this.items[todoIndex].progress === progress.Done;
      }
      else if (this.items[todoIndex].progress === progress.Done){
        this.items[todoIndex].progress === progress.Open
      }
      console.log('Működik a parent comp!')
  }


}

  