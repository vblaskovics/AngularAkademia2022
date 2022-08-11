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
    const index = this.items.indexOf(item);
    this.items.splice(index, 1);
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


  /* primeNumber(): number {
    let numbers = 0;
    for(let i = 1; i <= this.items.length; i++) {

    }
  } */

}
