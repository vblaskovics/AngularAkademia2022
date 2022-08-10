import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  // itemsCount: number;
  items: string[];


  constructor() {
    this.items = ["ToDo1", "ToDo2", "ToDo3", "ToDo4", "ToDo5", "ToDo6", "ToDo7", "ToDo8"];
  }

  get itemsCount():number {
    return this.items.length;
  }


  ngOnInit(): void {
  }

  addItem(): void {
    this.items.push("ToDo" + (this.itemsCount + 1));

  }

  removeItem(): void {
    this.items.splice((this.itemsCount - 1))
  }



}
