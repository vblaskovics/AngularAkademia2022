import { Component, OnInit, Input } from '@angular/core';
import { ListServiceService } from 'src/app/services/list-service.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos
  constructor(
    private ListService: ListServiceService
  ) {
    this.todos = ListService.getTodos();
    console.log(this.todos)
  }

  ngOnInit(): void {
  }

}
