import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  // itemsCount: number;
  items: string[]
  numberOfTodos: number;

  constructor() {
    this.items = [];
    this.numberOfTodos = 0;
  }

  // get - The get syntax binds an object property to a function that will be called when that property is looked up. 

  get itemsCount(): number {
    return this.items.length
  }



  ngOnInit(): void {
  }

  // void - nincs vissaztérési érték

  addItem(): void {
    this.numberOfTodos++
    this.items.push(`Todo${this.numberOfTodos}`)
  }

  removeItem(): void {
    this.items.splice(0, 1)
  }

  deleteItem(item: string) {
    let indexOfItem = this.items.findIndex(todo => todo === item)
    console.log(item)
    this.items.splice(indexOfItem, 1)
  }

  


}
