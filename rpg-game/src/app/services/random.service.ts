import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class RandomService {


  constructor(private loggerService: LoggerService) { }

  randomDmgNoise(): number {
    this.loggerService.log('Random number generated');
    return Math.floor(Math.random() * 6) + 1;
  }

  isCharacterOneAttacking(): boolean {
    return Math.random() > 0.5;
  }


}
