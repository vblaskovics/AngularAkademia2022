import { Injectable } from '@angular/core';
import { BehaviorSubject, interval, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class GameService {
  readonly minChar = 4;
  readonly maxChar = 6;
  readonly alphabet = 'abcdefghijklmnopqrstuvwxyz';
  readonly minSecond = 3;
  readonly maxSecond = 5;
  points$ = new BehaviorSubject<number>(0);
  currentTurn$ = new BehaviorSubject<number>(1);
  currentWord$ = new BehaviorSubject<string>(this.generateRandomWord());
  counter: any;
  counter$ = new BehaviorSubject<number>(this.generateSeconds());
  constructor() {
    this.counter$.subscribe((second) => {
      if (second == 1) {
        setTimeout(() => {
          this.newGame();
        }, 1000);
      }
    });
  }
  newGame() {
    this.stopCounter();
    this.counter$.next(this.generateSeconds());
    this.currentTurn$.next(this.currentTurn$.value + 1);
    this.currentWord$.next(this.generateRandomWord());
    this.startCounter();
  }

  startCounter() {
    this.counter = setInterval(() => {
      this.counter$.next(this.counter$.value - 1);
    }, 1000);
  }
  stopCounter() {
    clearInterval(this.counter);
  }
  submit(submitedWord: string) {
    if (this.currentWord$.value == submitedWord) {
      this.points$.next(this.points$.getValue() + 1);
      console.log(this.points$.value + 1);
    }
    this.newGame();
  }

  generateRandomWord() {
    const randomLength = Math.floor(
      Math.random() * (this.maxChar - this.minChar + 1) + this.minChar
    );
    let randomWord = '';
    for (let i = 0; i <= randomLength; i++) {
      randomWord +=
        this.alphabet[Math.floor(Math.random() * this.alphabet.length)];
    }
    return randomWord;
  }
  generateSeconds() {
    const randomLength = Math.floor(
      Math.random() * (this.maxSecond - this.minSecond + 1) + this.minSecond
    );

    return randomLength;
  }
}
/* import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class GameService {
  readonly minChar = 4;
  readonly maxChar = 6;
  readonly alphabet = 'abcdefghijklmnopqrstuvwxyz';
  readonly minSecond = 3;
  readonly maxSecond = 5;
  currentWord = this.generateRandomWord();
  seconds = this.generateSeconds();
  points: number = 0;
  currentTurn: number = 1;
  counter: any;
  game$ = new Subject<void>();

  constructor() {
    this.game$.subscribe(() => {
      this.newGame();
    });
  }
  generateSeconds() {
    const randomLength = Math.floor(
      Math.random() * (this.maxSecond - this.minSecond + 1) + this.minSecond
    );

    return randomLength;
  }
  newGame() {
    this.currentWord = this.generateRandomWord();
    this.currentTurn++;
    this.seconds = this.generateSeconds();
    this.stopCounter();
    this.startCounter();
  }
  startCounter() {
    this.counter = setInterval(() => {
      this.game$.next();
    }, this.seconds * 1000);
  }
  stopCounter() {
    clearInterval(this.counter);
  }
  submit(submitedWord: string) {
    if (this.currentWord == submitedWord) {
      this.points++;
    }
    this.game$.next();
  }

  generateRandomWord() {
    const randomLength = Math.floor(
      Math.random() * (this.maxChar - this.minChar + 1) + this.minChar
    );
    let randomWord = '';
    for (let i = 0; i <= randomLength; i++) {
      randomWord +=
        this.alphabet[Math.floor(Math.random() * this.alphabet.length)];
    }
    return randomWord;
  }
}
 */
