import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomService {

  constructor() { }

  getRandomNumber(): number {
    return Math.floor(Math.random() * 6 + 1)
  }
}
