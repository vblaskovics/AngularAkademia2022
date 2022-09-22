import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomService {

  constructor() { }

  randomNumber() {
    return Math.floor((Math.random() * 6) + 1);
  }
}
