import { EventEmitter, Injectable } from '@angular/core';
import { interval, Observable, map, filter, BehaviorSubject } from 'rxjs';

export class StateService {

  clock$: Observable<number> = interval(1000);
  elapsedTime: number = 0;
  showLogger: EventEmitter<boolean> = new EventEmitter<boolean>();

  public counter$: Observable<number>;
  public counter2$: Observable<number>;
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

    this.counter$ = this.clock$.pipe(map((sec) => {
      return this.counterDeadline - sec;
    }));

    this.counter2$ = this.clock$.pipe(map(() => {
      return this.elapsedTime
    }));

    this.counter$.pipe(filter((counter) => {
      return counter === 0 ? true : false
    })).subscribe(() => {
      this.resetCounter();
      this.resetWord();
    })

    this.resetCounter();
    this.resetWord();
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

  toggleLogger(value: boolean) {
    this.showLogger.emit(value)
  }
}
