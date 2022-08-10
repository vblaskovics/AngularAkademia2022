import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  items: string[];
  itemsCount: number;

  constructor() {
    this.items = [];
    this.itemsCount = this.items.length;
  }

  ngOnInit(): void {}

  onAddToDo() {
    this.items.push('Todo' + (this.itemsCount + 1));
    this.itemsCount = this.items.length;
  }

  onRemoveToDo() {
    this.items.shift();
  }

  onRemoveItem(item: string){
    const id = this.items.indexOf(item);
    this.items.splice(id, 1);
    this.itemsCount--;
  }
}


