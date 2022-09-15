import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WordGameService {

  public counterUpdated: Subject<boolean> = new Subject<boolean>();

  counter: number = 5;

  counterZero: number = 0;

  interval?: number;

  constructor() { }

  countDown() {
    this.interval = window.setInterval(() => {
      if(this.counter > 0){
        this.counter;
        console.log('counter', this.counter);
        this.counter--;
      } else {
        this.counterZero;
        console.log('0', this.counterZero);

        this.counter = 5;
      }
    }, 1000)
  }
}
