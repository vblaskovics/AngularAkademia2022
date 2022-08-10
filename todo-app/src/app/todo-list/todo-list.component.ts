import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  // itemsCount: number;
  items: string[];
  index: number;

  constructor() {
    this.items = ['Todo 1', 'Todo 2', 'Todo 3', 'Todo 4', 'Todo 5'];
    // this.itemsCount = this.items.length;
    this.index = this.items.length;
  }

  get itemsCount(): number {
    return this.items.length;
  }

  ngOnInit(): void {}

  addItem(): void {
    this.index++;
    this.items.push('Todo ' + this.index);
  }

  removeItem(): void {
    this.items.splice(0, 1);
  }

  removeSelectedItem(): void {}
}
