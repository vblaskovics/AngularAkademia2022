import { Component, OnInit } from '@angular/core';
import { findIndex } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  // itemsCount: number;
  items: string[];

  constructor() {
    this.items = ["todo1"];
    // this.itemsCount = this.items.length;
   }

  get itemsCount(): number {
    return this.items.length
  } //változóként kezeli a függvényt a getet. getterés

  ngOnInit(): void {
  }

  addItem(): void{
    // this.items.push("todo" + (this.itemsCount++));
    this.items.push("todo" + (this.itemsCount+1));
  }

  removeItem(): void {
    this.items.splice(0,1);
  }

}
