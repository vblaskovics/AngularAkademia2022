import { LoggerService } from './logger.service';
import { Character } from './../models/character';
import { Injectable } from '@angular/core';
import { DisplayService } from './display.service';
import { RandomService } from './random.service';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(
    private logger: LoggerService,
    private displayService: DisplayService,
    private randomService: RandomService
    ) { }

  attackFromTo(c1: Character, c2: Character) {
    let randomNumber = this.randomService.randomNumber();
    if((c1.attack + randomNumber) > c2.defense) {
      c2.hp -= 2;
      this.displayService.addHistoryEvent(`${c1.name} megsebezte ${c2.name}-t (-2hp)`);
    } else {
      this.displayService.addHistoryEvent(`${c2.name} nem sebezte meg ${c1.name}-t.`);
    }
  }

  attack(c1: Character, c2: Character) {
    this.logger.log('Start attack event');
    this.displayService.addHistoryEvent('=====TÁMADÁS=====');
    this.attackFromTo(c1, c2);
    this.attackFromTo(c2, c1);
  }
}
