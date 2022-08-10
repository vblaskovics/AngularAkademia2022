import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  // itemsCount: number;
  items: string[];
  itemsCopy: string[];

  constructor() {
    this.items = ["ToDo1", "ToDo2", "ToDo3", "ToDo4", "ToDo5"];
    this.itemsCopy = [...this.items];
  }

  get itemsCount(): number {
    return this.items.length;
  }

  ngOnInit(): void {
  }

  addItem(): void {
    this.items.push("ToDo" + (this.itemsCount + 1))
  }

  removeFirstItem(): void {
    this.items.shift();
  }

  removeItem(clickedItem: string) {
    this.items.splice(this.items.indexOf(clickedItem), 1);
  }

}
