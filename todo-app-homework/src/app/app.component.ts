import { Component, Input } from '@angular/core';
import { TODO } from './Interfaces/todo.interface';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  todo1IsSelected = true;

  selectedTodo?: TODO;
  constructor(private userService: UsersService) {
    this.userService.getUserFromId(1);
  }
  handleSelectTodo(selectedTodo: TODO) {
    this.selectedTodo = selectedTodo;
  }
}
