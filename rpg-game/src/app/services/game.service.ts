import { RandomService } from './random.service';
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
  static readonly ATTACK_EVENT_WINNING_STREAK_MSG = (n1: string) =>
    `${n1} is on a killing spree!!!`;

  constructor(
    private logger: LoggerService,
    private displayService: DisplayService,
    private randomService: RandomService
  ) {}

  attackFromTo(c1: Character, c2: Character): boolean {
    let random = this.randomService.randomNumber();
    let c1WinningStreakCounter: number = 0;
    let c2WinningStreakCounter: number = 0;
    if (c1.attack + random > c2.defense) {
      c2.hp -= 2;
      this.displayService.addHistoryEvent(
        GameService.ATTACK_EVENT_DAMAGE_MSG(c1.name, c2.name)
      );
      return true;
    } else {
      this.displayService.addHistoryEvent(
        GameService.ATTACK_EVENT_NODAMAGE_MSG(c1.name, c2.name)
      );
      return false;
    }
  }

  attack(c1: Character, c2: Character) {
    this.logger.log('Start attack event');
    this.displayService.addHistoryEvent(GameService.ATTACK_EVENT_MSG);

    this.attackFromTo(c1, c2);
    this.attackFromTo(c2, c1);
  }
}
