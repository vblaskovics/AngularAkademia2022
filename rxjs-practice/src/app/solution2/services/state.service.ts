import { Injectable } from '@angular/core';
import {
  interval,
  Observable,
  map,
  filter,
  BehaviorSubject,
  tap,
  Subject,
} from 'rxjs';

export class StateService {
  clock$: Observable<number> = interval(1000);
  elapsedTime: number = 0;
  elapsedTime$: Observable<number>;
  public counter$: Observable<number>;
  counterDeadline: number = 5;
  seEmiter$: Subject<void> = new Subject<void>();
  word: { value: string } = {
    value: 'empty',
  };

  score: { value: number } = {
    value: 0,
  };

  timesFive$: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor() {
    this.clock$.subscribe(() => {
      this.elapsedTime++;
    });
    //      .pipe(tap((i) => i % 5 == 0 && this.timesFive.next(i)))

    this.counter$ = this.clock$.pipe(
      map((sec) => {
        return this.counterDeadline - sec;
      })
    );
    this.elapsedTime$ = this.clock$.pipe(map((t) => this.elapsedTime));
    this.counter$
      .pipe(
        filter((counter) => {
          return counter === 0 ? true : false;
        })
      )
      .subscribe(() => {
        this.resetCounter();
        this.resetWord();
      });
    let isPrime = (number: number) => {
      let osztok = 0;
      let i = 0;
      while (osztok <= 2 && i <= number) {
        if (number % i == 0) {
          osztok++;
        }
        i++;
      }

      return osztok <= 2 ? true : false;
    };
    this.elapsedTime$
      .pipe(
        filter((i: number) => {
          return i > 5;
        }),
        tap((i) => console.log(`elapsedTime: ${i}, isItPrim: ${isPrime(i)}`)),
        filter(isPrime)
      )
      .subscribe(() => this.seEmiter$.next());

    this.counter$ = this.clock$.pipe(
      map((sec) => {
        return this.counterDeadline - sec;
      })
    );
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
    console.log('special_event', typedValue);
    if (typedValue === 'special_event') {
      console.log('eventing');

      this.seEmiter$.next();
      this.resetWord();
      this.addScore();
    } else if (typedValue === this.word.value) {
      this.resetWord();
      this.addScore();
    } else {
      this.resetWord();
      this.resetCounter();
    }
  }
}
