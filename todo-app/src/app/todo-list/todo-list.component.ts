import { Component, OnInit } from '@angular/core';
import { MaxValidator } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {

  items: string[];
  itemsCounter: number;
  HigherThanEight: boolean = false;
  isItSecond: boolean = false;

  constructor() {
    this.items = [];
    this.itemsCounter = this.items.length +1;
  }

  ngOnInit(): void {}

  get itemsCount():number {
    return this.items.length;
  }
//ToDo addoljon és incrementálja folyamatosan
  onAddToDo() {
    this.items.push('Todo' + (this.itemsCounter));
    this.itemsCounter++;

  }

  onAddToDo2(){
    let currentMax =0;
    this.items.forEach(i => {
      let idOfTodo = parseInt(i.split("Todo")[1]);
      currentMax = idOfTodo > currentMax ? idOfTodo: currentMax
    })
    this.items.push('Todo'+ (currentMax+1))
    currentMax++;
  }
  onRemoveToDo() {
    this.items.shift();
  }

  onRemoveItem(item: string){
    const id = this.items.indexOf(item);
    this.items.splice(id, 1);
  }

  isSecond(item: string){
    let index = this.items.indexOf(item);
    if ((index +1) % 2 === 0) {
      return this.isItSecond = true;
    }
    else if(index+ 1 >= 8) {
      return this.HigherThanEight = true;
    }
    else if(8 > index+1){
      return this.HigherThanEight= false;
    }
    else {
      return this.isItSecond =false
    }

  }
  isPrimeNumber(indexNmb: number): boolean{
    let IsPrime = false;
    for (let index = 0; index < indexNmb; index++) {
      if () {

      } else {

      }
    }
  }


}


