import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  // itemsCount: number;
  items: string[];
  matchedItems: string [];


  constructor() {
    this.items = [];
    this.matchedItems = [];
  }


  get itemsCount():number {
    return this.items.length;
  }


  totalCount():void {
    this.itemsCount
  }


  ngOnInit(): void {
  }

  addItem(): void {
    this.items.push("ToDo" + (this.itemsCount + 1));

  }

  addItem2(): void {
    this.items.push("ToDo" + (this.itemsCount + 1));

  }

  removeItem2(item: string): void {
    this.items.shift();
    const id = this.items.indexOf(item)
    this.items.splice(id, 1)
  }


  removeItem(): void {
    this.items.shift();
  }

}
