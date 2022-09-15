import { Injectable } from '@angular/core';
import { filter, interval, map, Observable, Subject } from 'rxjs';

export class StateService {
  clock: Observable<number> = interval(1000);

  counter$: Observable<number>;
  counterDeadline: number = 6;
  elapsedTime: number = 0;

  word: { value: string } = {
    value: 'empty',
  };

  score: { value: number } = {
    value: 0,
  };

  constructor() {
    this.clock.subscribe((value) => {
      this.elapsedTime++;
    });

    this.counter$ = this.clock.pipe(
      map((count) => {
        return this.counterDeadline - count;
      })
    );

    let zeroAlert$ = this.counter$.pipe(
      filter((counter) => {
        return counter === 0;
      })
    );

    zeroAlert$.subscribe((value) => {
      this.resetCounter();
    });

    this.resetCounter();
    this.resetWord();
  }

  getClock(): Observable<number> {
    return this.clock;
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
      this.addScore();
    }
    this.resetWord();
    this.resetCounter();
  }
}
