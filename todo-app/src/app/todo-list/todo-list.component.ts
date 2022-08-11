import { Component, OnInit } from '@angular/core';
import { max } from 'rxjs';

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
    
   // setInterval(()=>this.addItem(), 5000)
   
   }

  ngOnInit(): void {
  }
  get itemsCount():number{
    return this.items.length
  }
  addItem(){
    this.idCounter ++
    this.items.push('item '+this.idCounter)
  }
  addItem2(){
    let maxID = 0
    this.items.forEach(item => {
      let id:number = parseInt(item.split(' ')[item.split(' ').length - 1])
      if(id >maxID){
        maxID = id
      }
    });
    this.idCounter ++
    this.items.push('item '+(maxID + 1))

    console.log(maxID)
  }
  removeItem():void{
    this.items.splice(0,1)
  }
  onDestroy(index:number):void{
    this.items.splice(index, 1)
  }
  handleChange(e:Event,index:number){
    console.log()
    //this.items[index] = (e.target as HTMLInputElement).value

   // target += e.target.value
  }
}
