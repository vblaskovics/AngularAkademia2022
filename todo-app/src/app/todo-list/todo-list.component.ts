import { Component, OnInit } from '@angular/core';

@Component({ //app.comp dekorátor - ez hivja meg a komponenst a bönglszőbe
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  // itemsCount: number;
  grey = 'background-color: gray;';
  nextId: number;
  items: string[];
  // evenItem: string[];
  // grey: string;
  

  constructor() {
    this.items = ["todo1"];
    this.nextId = this.items.length +1;
    // this.evenItem = this.items.filter(x => x % 2 === 0);
    // this.grey = '';
   }


  get onTodoMoreThanEight(): boolean {
    return this.items.length > 8;
  }

  get itemsCount(): number {
    return this.items.length
  } //változóként kezeli a függvényt a getet. getterés

  isPrime(num: number): boolean {
    if (num === 0 || num === 1 ) return false;
    if (num === 2 ) return true;
    let maxCheck = Math.ceil(Math.sqrt(num));
    for (let i = 2; i <= maxCheck; i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

  ngOnInit(): void {
  }

  addItem(): void{
    // this.items.push("todo" + (this.itemsCount++));
    this.items.push("todo" + (this.itemsCount+1));
  }

  removeItem(): void {
    //  this.items.splice(0,1);
     this.items.shift() // mindig a tetejéből töröl
   }

  // deleteItem(): void{

  //   const index = this.items.indexOf(this.items[1]);
  //   if ( index > 0){
  //      this.items.splice(index,1);
    
  //    }
  
  // }

  deleteItem(item: string ): void{
     const index = this.items.indexOf( item );

     this.items.splice(index, 1)

  // removeItem()
  // (value){
  //   const index: number = this.myArray.indexOf(value);
  //   this.myArray.splice(index, 1);
  }

  // addPlusItem(items: []){
  //   const plustItem = Math.max(...items);
  //   return plustItem
  // }


  addPlusItem(): void {
    let maxId = 0;
    this.items.forEach( i => {
      let itemId = parseInt(i.split("Todo")[1]);
      maxId = itemId > maxId ? itemId : maxId;
    })
    this.items.push("Todo" + (maxId + 1));
    this.nextId += 1
  }

}
