import { Component, OnInit, ɵisListLikeIterable } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  itemsCount:number;
  items:string[];

  constructor() {
    this.items = ["Todo1", "Todo2", "Todo3", "Todo4", "Todo5"];
    this.itemsCount = this.items.length;

  }

  getItemsCount():number {
    return this.itemsCount;
  }

  ngOnInit(): void {
  }

  addItem(): void {
    this.items.push("Todo" + (this.itemsCount + 1));
    this.itemsCount += 1;
  }



  removeTopItem(): void {
    this.items.shift();
    this.itemsCount -= 1;
    if(this.itemsCount < 0) {
      this.itemsCount = 0;
    }
  }

  removeItemById(id: number): void {
    this.items.splice(id, 1);
    this.itemsCount -= 1;
    if(this.itemsCount < 0) {
      this.itemsCount = 0;
    }
  }

  addMoreItem(): void {
    let maxId = 0;
    this.items.forEach(i => {
      let todoId = parseInt(i.split("Todo")[1]);
      maxId = todoId > maxId ? todoId : maxId;
    })
    this.items.push("Todo" + (maxId + 1));
    this.itemsCount += 1
  }

  onlyEven(): void {

  }


}
