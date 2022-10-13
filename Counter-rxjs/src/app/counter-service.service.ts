import { randomtext } from './randomtext-model';
import { Injectable } from '@angular/core';
import { Subscription, timer } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CounterServiceService {
  //counter:
  countDown: Subscription = new Subscription();
  counter = 6;
  tick = 1000;

  //randomtext:
  randomize: Subscription = new Subscription();
  randomtext: randomtext[];

  constructor() {
    this.randomtext = [
      {
        text: 'ztrgrfd',
      },
      {
        text: 'iuhgfdd',
      },
      {
        text: 'erfssrf',
      },
      {
        text: 'asdfukj',
      },
      {
        text: 'poiuzthd',
      },
    
    ];
  }


  getRandomtext(){
    // this.randomize = 
    this.randomtext[Math.floor(Math.random()*this.randomtext.length)];
  }


  getCounter(tick: any) {
    return timer(0, tick);
  }

  ngOnInit() {
    this.countDown = timer(0, this.tick).subscribe(() => --this.counter);
    // this.randomize = this.randomtext[Math.floor(Math.random()*this.randomtext.length)].subscribe()
  }

  ngOnDestroy() {
    this.countDown == null;
    // this.randomize == null
  }
}
