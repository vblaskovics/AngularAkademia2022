import { RandomService } from 'src/app/services/random.service';
import { DisplayService } from './display.service';
import { Injectable } from '@angular/core';
import { Character } from '../models/Character';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  static readonly ATTACK_EVENT_MSG = `=== TÁMADÁS ===`;
  static readonly ATTACK_EVENT_DAMAGE_MSG = (n1: string, n2: string) =>
    `${n1} megsebezte ${n2}-t (-)`;
  static readonly ATTACK_EVENT_NODAMAGE_MSG = (n1: string, n2: string) =>
    `${n1} nem sebezte meg ${n2}-t`;
  constructor(
    private logger: LoggerService,
    private displayService: DisplayService,
    private randomService: RandomService
  ) {}

  // attack(c1: Character, c2: Character) {
  //   if (c1.attack > c2.defense) {
  //     c2.health -= 2;
  //   }
  // }

  attack(c1: Character, c2: Character) {
    this.logger.log('Start attack event');
    this.whoAttackedWo(c1, c2);
    this.whoAttackedWo(c1, c2);
  }

  whoAttackedWo(c1: Character, c2: Character) {
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
}
