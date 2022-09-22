import { Injectable } from '@angular/core';
import { interval, Observable, map, filter, Subject } from 'rxjs';

export class StateService {

  clock$: Observable<number> = interval(1000);

  elapsedTime$: Observable<number> = new Observable();
  elapsedTime: number = 0;
  elapsedPrime$: Observable<number> = new Observable();

  public counter$: Observable<number>;
  counterDeadline: number = 5;

  word: { value: string } = {
    value: 'empty'
  }

  score: { value: number } = {
    value: 0
  }

  specialEvent$:Subject<number> = new Subject<number>();

  constructor() {
    this.clock$.subscribe(() => {
      this.elapsedTime++;
    });
    this.elapsedTime$ = this.clock$.pipe(map(() => this.elapsedTime));

    this.counter$ = this.clock$.pipe(map((sec) => {
      return this.counterDeadline - sec;
    }));

    this.counter$.pipe(filter((counter) => {
      return counter === 0 ? true : false
    })).subscribe(() => {
      this.resetCounter();
      this.resetWord();
    });

    this.elapsedPrime$ = this.createElapsedPrime$();
    this.elapsedPrime$.subscribe(this.specialEvent$)

    this.resetCounter();
    this.resetWord();
  }

  createElapsedPrime$(): Observable<number> {
    return this.elapsedTime$.pipe(
      filter((t) => t > 5),
      filter((t) => {
        if (t === 0) return false;
        if (t === 1) return true;
        for (let i = 2; i < t; i++) {
          if (t % i === 0) return false;
        }
        return true;
      }))
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
    this.cheatCodeHandler(typedValue);

    if (typedValue === this.word.value) {
      this.resetWord();
      this.addScore();
    } else {
      this.resetWord();
      this.resetCounter();
    }
  }

  cheatCodeHandler(value:string) {
    if (value === 'special_event'){
      this.specialEvent$.next(0);
    }
  }
}
