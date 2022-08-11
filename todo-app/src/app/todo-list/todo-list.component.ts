import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  nextId: number;
  items: string[];

  constructor() {
    this.items = ['Todo1', 'Todo2', 'Todo3', 'Todo4', 'Todo5'];
    this.nextId = this.items.length + 1;
  }

  get itemsCount(): number {
    return this.items.length;
  }

  get isTooManyTodos(): boolean {
    return this.items.length > 8;
  }

  ngOnInit(): void {}

  addItem(): void {
    this.items.push('Todo' + this.nextId);
    this.nextId += 1;
  }

  addItem2(): void {
    let maxId = 0;
    this.items.forEach((i) => {
      let todoId = parseInt(i.split('Todo')[1]);
      maxId = todoId > maxId ? todoId : maxId;
    });
    this.items.push('Todo' + (maxId + 1));
    this.nextId += 1;
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

  removeTopItem(): void {
    this.items.shift();
  }

  removeItem(item: string): void {
    this.items = this.items.filter((i) => i !== item);
  }
}
