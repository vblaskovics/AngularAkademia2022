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
  indexArray: number[];

  constructor() {
    this.items = ['Todo 1', 'Todo 2', 'Todo 3', 'Todo 4', 'Todo 5'];
    // this.itemsCount = this.items.length;
    this.index = this.items.length;
    this.indexArray = [];
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
    // this.items.shift();
  }

  removeSelectedItem(element: string): void {
    this.items.forEach((value, index) => {
      if (value == element) this.items.splice(index, 1);
    });
  }

  isPrime(num: number): boolean {
    if (num === 0 || num === 1) return false;
    if (num === 2) return true;
    let maxCheck = Math.ceil(Math.sqrt(num));
    for (let i = 2; i <= maxCheck; i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
}

// removeSelectedItem(item: string): void {
//   this.items = this.items.filter(i => i !== item);
// }
