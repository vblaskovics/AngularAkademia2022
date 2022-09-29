import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RandomService {
  constructor() {}
  random() {
    return Math.floor(Math.random() * 6) + 1;
  }
}
