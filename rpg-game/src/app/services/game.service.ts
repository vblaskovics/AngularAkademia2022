import { Injectable } from '@angular/core';
import { Character } from '../models/character.model';
import { DisplayService } from './display.service';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  static readonly ATTACK_EVENT_MSG = `=== ATTACK ===`;
  static readonly ATTACK_EVENT_DAMAGE_MSG = (n1: string, n2: string) =>
    `${n1} hit ${n2} (-2hp)`;
  static readonly ATTACK_EVENT_NODAMAGE_MSG = (n1: string, n2: string) =>
    `${n1} did not hurt ${n2}`;

  constructor(
    private logger: LoggerService,
    private displayService: DisplayService
  ) {}

  attackFromTo(c1: Character, c2: Character) {
    if (c1.attack > c2.defense) {
      c2.hp -= 2;
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
