import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  
  items:string[] = []
  idCounter :number = 0

  constructor() {
    this.addItem()
    this.addItem()
    this.addItem()
    this.addItem()
   
   }

  ngOnInit(): void {
  }
  get itemsCount():number{
    return this.items.length
  }
  addItem(){
    this.idCounter ++
    this.items.push('item'+(this.idCounter))
  }
  removeItem():void{
    this.items.splice(0,1)
  }
  onDestroy(index:number):void{
    this.items.splice(index, 1)
  }
}
