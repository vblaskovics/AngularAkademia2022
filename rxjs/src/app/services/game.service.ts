import { Injectable } from '@angular/core';
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
