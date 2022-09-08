import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MainServiceService {
  counter: number;
  displayedWord: string;

  constructor() {
    this.counter = 5;
    this.displayedWord = this.getRandomWord(this.words);
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
      console.log('new word: ', this.displayedWord);
    }
  }, 1000);

  getRandomWord(array: string[]): string {
    return array[Math.floor(Math.random() * array.length)];
  }
}
