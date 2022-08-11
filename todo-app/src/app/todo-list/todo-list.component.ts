import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  itemsCounter: number;
  items: string[];

  constructor() {
    this.items = ["Todo1", "Todo2", "Todo3", "Todo4", "Todo5"];
    this.itemsCounter = this.items.length;
  }

  get itemsCount():number {
    return this.items.length;
  }

  get isTooManyTodos(): boolean {
    return this.items.length > 8;
  }

  ngOnInit(): void {
  }

  addItem(): void {
    this.items.push('Todo' + (this.itemsCounter + 1));
    this.itemsCounter++;
  }

  removeItem(): void {
    this.items.shift();
  }

  removeSelected(i: number): void {
    this.items.splice(i, 1);
  }

  addItem2(): void {
    let max =0
    this.items.forEach((item)=>{
     let id = parseInt(item.slice(4,item.length))
     if(max < id){
       max = id
     }
     console.log(id)
    })
    console.log(max)
    this.items.push('Todo' + (max + 1));
    this.itemsCounter++;
  }

}
