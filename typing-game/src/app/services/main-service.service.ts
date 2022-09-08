import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MainServiceService {
  counter: number;
  displayedWord: string;
  enteredWord: string;
  score: number;
  scoreSubject: Subject<number>;

  constructor() {
    this.counter = 5;
    this.displayedWord = this.getRandomWord(this.words);
    this.enteredWord = '';
    this.score = 0;
    this.scoreSubject = new Subject<number>();
  }

  words: string[] = [
    'sdegfu',
    'nckjqm',
    'jdifjd',
    'xprat',
    'yxcde',
    'stirw',
    'sdrtrz',
    'trzoie',
    'twopaw',
    'lqpowe',
    'zupoq',
    'werwbn',
    'ertjp',
    'lqerty',
    'rezif',
    'gddsji',
    'hklowd',
    'qwpxbn',
  ];

  counterInterval = setInterval(() => {
    this.counter = this.counter - 1;

    if (this.counter <= -1) {
      this.counter = 5;
      this.displayedWord = this.getRandomWord(this.words);
    }
  }, 1000);

  getRandomWord(array: string[]): string {
    return array[Math.floor(Math.random() * array.length)];
  }

  compareWords(
    input: string = this.enteredWord,
    word: string = this.displayedWord
  ): void {
    if (input === word) {
      this.incrementScore();
    }
    this.resetWord();
  }

  resetWord(): void {
    this.enteredWord = '';
    this.displayedWord = this.getRandomWord(this.words);
    /* clearInterval(this.counterInterval);
    this.counterInterval = setInterval(() => {
      this.counter = this.counter - 1;

      if (this.counter <= -1) {
        this.counter = 5;
        this.displayedWord = this.getRandomWord(this.words);
      }
    }, 1000); */
  }

  incrementScore() {
    this.score++;
    this.scoreSubject.next(this.score);
  }
}
