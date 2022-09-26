import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character';
import { DisplayService } from './display.service';
import { LoggerService } from './logger.service';
import { RandomService } from './random.service';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  static readonly ATTACK_EVENT_MSG = `=== TÁMADÁS ===`;
  static readonly ATTACK_EVENT_DAMAGE_MSG = (n1: string, n2: string) =>
    `${n1} megsebezte ${n2}-t (-2 hp)`;
  static readonly ATTACK_EVENT_NODAMAGE_MSG = (n1: string, n2: string) =>
    `${n1} nem sebezte meg ${n2}-t`;

  constructor(
    private logger: LoggerService,
    private displayService: DisplayService,
    private randomService: RandomService
  ) {}

  attackFromTo(c1: Character, c2: Character) {
    let rand = this.randomService.random();
    if (c1.attack + rand > c2.defense) {
      c2.health -= 2;
      this.displayService.addHistoryEvent(
        GameService.ATTACK_EVENT_DAMAGE_MSG(c1.name, c2.name)
      );
    } else {
      this.displayService.addHistoryEvent(
        GameService.ATTACK_EVENT_NODAMAGE_MSG(c1.name, c2.name)
      );
    }
  }

  attack(c1: Character, c2: Character) {
    this.logger.log('Start attack event');
    this.displayService.addHistoryEvent(GameService.ATTACK_EVENT_MSG);

    this.attackFromTo(c1, c2);
    this.attackFromTo(c2, c1);
  }
}
