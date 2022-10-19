import { Component, OnInit } from '@angular/core';
import { TODO } from 'src/app/Interfaces/todo.interface';
import { TodosService } from 'src/app/services/todos.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  constructor(
    public todosService: TodosService,
    public usersService: UsersService
  ) {}
  selectedTodo?: TODO;
  todo1IsSelected = true;

  ngOnInit(): void {}
  /* handleSelectTodo(selectedTodo: TODO) {
    this.selectedTodo = selectedTodo;
  } */
}
