import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  nextId:number;
  items:string[];

  constructor() {
    this.items = ["Todo1", "Todo2", "Todo3", "Todo4", "Todo5"];
    this.nextId = this.items.length + 1;
  }

  get itemsCount():number {
    return this.items.length;
  }

  ngOnInit(): void {
  }

  addItem(): void {
    this.items.push("Todo" + this.nextId);
    this.nextId += 1;
  }

  removeTopItem(): void {
    this.items.shift();
  }

  removeItem(item: string): void {
    this.items = this.items.filter(i => i !== item);
  }

}
