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

  addItem() {
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

  addItem2(): void{
    let maxId = 0;
    this.numberOfTodos++
    this.items.forEach(item => {
      let serial = parseInt(item.split("Todo")[1])
      maxId = serial > maxId ? serial : maxId
    })
    this.items.push(`Todo${maxId + 1}`)
  }

  isPrime(index: number) {
    let isPrime = false;
    let counter = 0;
    for(let i = 1; i <= index; i++){
      if(index % i === 0){
        counter++
      }
    }
    if(counter <= 2){
      isPrime = true;
    }
    console.log(counter)
    return isPrime
  }



  


}
