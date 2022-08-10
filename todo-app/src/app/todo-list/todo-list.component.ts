import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  _itemsCount:number;
  items:string[];

  constructor() {
    this.items = ["Todo1", "Todo2", "Todo3", "Todo4", "Todo5"];
    this._itemsCount = this.items.length;
  }

  get itemsCount():number {
    return this._itemsCount;
  }

  ngOnInit(): void {
  }

  addItem(): void {
    this.items.push("Todo" + (this.itemsCount + 1));
    this._itemsCount += 1;
  }

  removeTopItem(): void {
    this.items.shift();
  }

  removeItem(item: string): void {
    this.items = this.items.filter(i => i !== item);
  }

}
