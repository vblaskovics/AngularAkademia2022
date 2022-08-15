import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-todo-app';

  count?: number
  constructor(){
  }

  getCounter(num: number) {
    this.count = num
    console.log(this.count)
  }
  
}
