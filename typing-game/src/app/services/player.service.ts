import { Injectable } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  results: string = '';
  sub?: Subscription;
  overallPoints: number = 0;
  submitted: boolean = false;
  helpingstring: string = '';
  constructor() {}

  generateRandom() {
    const charset = 'abcdefghijklmnopqrstuvwxyz';
    const randomLength = Math.floor(Math.random() * (7 - 4)) + 4;
    this.results = '';

    for (let i = 0; i < randomLength; i++) {
      this.results += charset.charAt(
        Math.floor(Math.random() * charset.length)
      );
    }
    this.submitted = false;
    return this.results;
  }
}
