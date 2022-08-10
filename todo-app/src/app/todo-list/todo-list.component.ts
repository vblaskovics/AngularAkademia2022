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
    this.items = ["Todo1", "Todo2", "Todo3", "Todo4", "Todo5"];
    // this.itemsCount = this.items.length;
  }

  get itemsCount():number {
    return this.items.length;
  }

  ngOnInit(): void {
  }

  addItem(): void {
    this.items.push('Todo' + (this.itemsCount + 1));
  }

  removeItem(): void {
    this.items.shift();
  }

  removeHover(): void {

  }

}
