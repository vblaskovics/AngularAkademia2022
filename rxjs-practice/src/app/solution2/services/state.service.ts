import { Injectable } from '@angular/core';
import { interval, Observable, map, filter, tap } from 'rxjs';

export class StateService {

  isVisible: boolean = true;
  clock$: Observable<number> = interval(1000);
  elapsedTime: number = 0;
  elapsedTimeCounter: Observable<number> | undefined;
  elapsedTime$: Observable<number>;

  time$: Observable<number> = new Observable();
  

  public counter$: Observable<number>;
  counterDeadline: number = 5;

  word: { value: string } = {
    value: 'empty'
  }

  score: { value: number } = {
    value: 0
  }

  constructor() {
    this.clock$.subscribe(() => {
      this.elapsedTime++;
    });

    this.elapsedTime$ = this.clock$.pipe(map(()=> this.elapsedTime));

    this.counter$ = this.clock$.pipe(map((sec) => {
      return this.counterDeadline - sec;
    }));
    
    this.counter$.pipe(filter((counter) => {
      return counter === 0 ? true : false
    })).subscribe(() => {
      this.resetCounter();
      this.resetWord();
    })

    this.resetCounter();
    this.resetWord();



    this.time$ = this.clock$.pipe(
      filter((t) => t % 5 === 0),
      tap((t) => {if(t % 5 === 0 && t > 0) { console.log('váltás ${t-5} -> ${t}')}
       
     }
     )
    )


  }


  resetCounter(): void {
    this.counterDeadline = this.elapsedTime + Math.floor(Math.random() * 3) + 3;
  }

  getWord() {
    return this.word;
  }

  resetWord() {
    let newWord = '';
    let possible = 'abcdefghijklmnopqrstuvwxyz';
    for (let i = 0; i < Math.floor(Math.random() * 3) + 4; i++) {
      newWord += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    this.word.value = newWord;
  }

  getScore() {
    return this.score;
  }

  addScore() {
    this.score.value++;
  }

  typingCheck(typedValue: string) {
    if (typedValue === this.word.value) {
      this.resetWord();
      this.addScore();
    } else {
      this.resetWord();
      this.resetCounter();
    }
  }

  
}
