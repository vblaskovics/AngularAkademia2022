import { Injectable } from '@angular/core';
import { Character } from '../model/character';
import { DisplayService } from './display.service';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  constructor(
    private loggerService: LoggerService,
    private displayService: DisplayService
  ) {}

  attack(c1: Character, c2: Character): void {
    this.displayService.logAttackStart();
    this.attackFromTo(c1, c2);
    this.attackFromTo(c2, c1);
  }

  attackFromTo(c1: Character, c2: Character) {
    if (c1.attack > c2.defense) {
      c2.hp -= 2;
/*       this.loggerService.log(`${c1.name} megsebezte ${c2.name} - t`);
      this.loggerService.log(`${c2.name} nem sebezte meg ${c1.name} - t`); */
      this.displayService.logWinnerAndLoser(c1, c2);
    }
  }
}
