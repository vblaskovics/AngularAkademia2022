import { Component, Input, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  @Input() items!: Todo[];
  @Input() title!: string;

  constructor() {}

  ngOnInit(): void {
    console.log(this.items);
  }
  onDestroy(id: number) {
    console.log(id);
    let i = 0;
    while (i < this.items.length && this.items[i].id !== id) {
      i++;
    }
    if (i < this.items.length) this.items.splice(i, 1);
  }
  deleteItem(todo: Todo) {
    console.log('todolist multi.component deleteitem', todo)
    this.items = this.items.filter(i => i.id !== todo.id)
  }
}
