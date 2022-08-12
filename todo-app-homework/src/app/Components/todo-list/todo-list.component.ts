import { Component, Input,Output, OnInit } from '@angular/core';
import { TODO } from 'src/app/Interfaces/todo.interface';
import { USER } from 'src/app/Interfaces/user.interface';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  @Input() todos!: TODO[];
  @Input() users!: USER[];
  selectedTodo?:TODO

  inputs: string[];
  constructor() {
    this.inputs = ['id', 'title', 'progress', 'user name'];
  }

  ngOnInit(): void {}
  handleSelectClick(selectedTodo:TODO){
    this.selectedTodo = selectedTodo
  }
}
