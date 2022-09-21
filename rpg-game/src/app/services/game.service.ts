import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private logger:LoggerService) { }

  attackFromTo(c1: Character, c2: Character) {
    if(c1.attack > c2.defense) {
      c2.hp -= 2;
    }
  }

  attack(c1: Character, c2:Character) {
    this.logger.log('Start attack event');
    this.attackFromTo(c1, c2);
    this.attackFromTo(c2, c1);
  }
}
