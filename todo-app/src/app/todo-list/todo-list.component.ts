import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
=======
import { MaxValidator } from '@angular/forms';
>>>>>>> 7d99ba94b13527368e1a2a93686137e8203437a4

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
<<<<<<< HEAD
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
=======
  items: string[];
  itemsCounter: number;
  HigherThanEight: boolean = false;
  isItSecond: boolean = false;

  constructor() {
    this.items = [];
    this.itemsCounter = this.items.length + 1;
>>>>>>> 7d99ba94b13527368e1a2a93686137e8203437a4
  }

  ngOnInit(): void {}

<<<<<<< HEAD
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
=======
  get itemsCount(): number {
    return this.items.length;
  }
  //ToDo addoljon és incrementálja folyamatosan
  onAddToDo() {
    this.items.push('Todo' + this.itemsCounter);
    this.itemsCounter++;
  }

  onAddToDo2() {
    let currentMax = 0;
    this.items.forEach((i) => {
      let idOfTodo = parseInt(i.split('Todo')[1]);
      currentMax = idOfTodo > currentMax ? idOfTodo : currentMax;
    });
    this.items.push('Todo' + (currentMax + 1));
    currentMax++;
  }
  onRemoveToDo() {
    this.items.shift();
  }

  onRemoveItem(item: string) {
    const id = this.items.indexOf(item);
    this.items.splice(id, 1);
  }

  isSecond(item: string) {
    let index = this.items.indexOf(item);
    if ((index + 1) % 2 === 0) {
      return (this.isItSecond = true);
    } else if (index + 1 >= 8) {
      return (this.HigherThanEight = true);
    } else if (8 > index + 1) {
      return (this.HigherThanEight = false);
    } else {
      return (this.isItSecond = false);
    }
>>>>>>> 7d99ba94b13527368e1a2a93686137e8203437a4
  }
}
