import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  items: string[];
  itemsCounter: number;

  constructor() {
    this.items = [];
    this.itemsCounter = this.items.length;
  }

  ngOnInit(): void {}

  get itemsCount():number {
    return this.items.length;
  }

  onAddToDo() {
    this.items.push('Todo' + (this.itemsCounter + 1));
    this.itemsCounter++;
  }

  onRemoveToDo() {
    this.items.shift();
  }

  onRemoveItem(item: string){
    const id = this.items.indexOf(item);
    this.items.splice(id, 1);
    console.log(this.itemsCounter);
  }

  onSelectItem(){

  }
}


