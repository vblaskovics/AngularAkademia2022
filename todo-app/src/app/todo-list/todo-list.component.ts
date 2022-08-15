import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  // itemsCount: number;
  items: string [];
  serial: number;

  constructor() {
    this.items = [];
    this.serial = this.items.length + 1;
  }


  get itemsCount(): number {
    return this.items.length;
  }

  ngOnInit(): void {
  }

  addItem(): any {
    this.serial ++;
    this.items.push("Todo" + this.serial);
  }

  removeFirstItem(): void {
    this.items.shift();

  }

  removeAnyItem(item: string): void {
    this.items = this.items.filter((i) => i !== item);
  }

  addItemTwo(): void {
    let maxId = 0;
    this.items.forEach((i) => {
      let todoId = parseInt(i.split('Todo')[1]);
      maxId = todoId > maxId ? todoId : maxId;
    });
    this.items.push('Todo' + (maxId + 1));
    this.serial += 1;
  }


  isPrime(num: number): boolean {
    if (num === 0 || num === 1 ) return false;
    if (num === 2 ) return true;
    let maxCheck = Math.ceil(Math.sqrt(num));
    for (let i = 2; i <= maxCheck; i++) {
      if (num % i === 0) return false;
    }
    return true;
  }



}
