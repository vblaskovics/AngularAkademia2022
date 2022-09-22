import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RandomService {
  constructor() {}

  randomNumber(): number {
    return Math.floor(Math.random() * (6 - 1 + 1)) + 1;
  }
}
