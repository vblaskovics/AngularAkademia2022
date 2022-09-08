import { Component, Input } from '@angular/core';
import { TODO } from './Interfaces/todo.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ToDo List Advanced';
  todo1IsSelected = true;

  selectedTodo?: TODO;
  constructor() {}
  handleSelectTodo(selectedTodo: TODO) {
    this.selectedTodo = selectedTodo;
  }
}
