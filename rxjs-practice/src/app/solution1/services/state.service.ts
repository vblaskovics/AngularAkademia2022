import { Injectable } from '@angular/core';
import { interval, Observable, Subject } from 'rxjs';

export class StateService {

  
  clock: Observable<number> = interval(2000);

  counter: { value: number } = {
    value: 0
  }

  word: { value: string } = {
    value: 'empty'
  }

  score: { value: number } = {
    value: 0
  }

  constructor() {
    this.clock.subscribe((value) => {
      console.log(value);
      this.counter.value--;
      if (this.counter.value === 0) {
        this.resetCounter();
        this.resetWord();
      }
    })

    this.resetCounter();
    this.resetWord();
  }

  getClock(): Observable<number> {
    return this.clock;
  }

  getCounter() {
    return this.counter;
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
