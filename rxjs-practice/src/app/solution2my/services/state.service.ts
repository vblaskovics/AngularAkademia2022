import { Injectable } from '@angular/core';
import { interval, map, Observable, Subject } from 'rxjs';

export class StateService {
  clock: Observable<number> = interval(1000);
  counter$: Observable<number>;
  counter: { value: number } = {
    value: 0,
  };
  myCounter = 0;
  word: { value: string } = {
    value: 'empty',
  };
  counterDeadline = 6;
  elapsedTime = 0;
  score: { value: number } = {
    value: 0,
  };
  time = 0;
  constructor() {
    this.clock.subscribe((value) => {
      console.log(value);
      this.counter.value--;

      if (this.counter.value === 0) {
        this.resetCounter();
        this.resetWord();
      }
    });

    this.resetCounter();
    this.resetWord();

    this.counter$ = this.clock.pipe(
      map((count) => {
        this.time++;
        console.log(this.time);
        if (this.counterDeadline - count == 0) {
          this.setCounterDeadline();
        }
        return this.counterDeadline - count;
      })
    );
  }

  getClock(): Observable<number> {
    return this.clock;
  }

  getCounter() {
    return this.counter;
  }
  setCounterDeadline() {
    this.counterDeadline =
      this.counterDeadline + Math.floor(Math.random() * 3) + 3;
  }
  resetCounter(): void {
    this.counter.value = Math.floor(Math.random() * 3) + 3;
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
      this.addScore();
    }
    this.resetWord();
    this.resetCounter();
  }
}
