import { Injectable } from '@angular/core';
import { GameService } from './game.service';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root',
})
export class RandomService {
  constructor(loggerService: LoggerService) {}

  // bigAttack(i: number) { let random = Math.floor(Math.random() * ( 0 - 4))

  // attackFunction(nmbr: number) {
  //   Math.floor(Math.random() * 5);
  //   console.log(nmbr);
  // }

  //random number between 1-6

  // Random number between 1 to 6
  random(): number {
    // this.loggerService.log('Random number generated');
    return Math.floor(Math.random() * 6) + 1;


  }
}
