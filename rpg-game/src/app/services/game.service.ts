import { RandomService } from './random.service';
import { DisplayService } from './display.service';
import { LoggerService } from './logger.service';
import { Character } from './../models/character';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GameService {

  randomPoint = this.RandomService.random();

  static readonly ATTACK_EVENT_MSG = `=== TÁMADÁS ===`
  static readonly ATTACK_EVENT_DAMAGE_MSG = (n1: string, n2: string) => `${n1} megsebezte ${n2}-t (-2 hp)`
  static readonly ATTACK_EVENT_NODAMAGE_MSG = (n1: string, n2: string) => `${n1} nem sebezte meg ${n2}-t`


  constructor(private LoggerService: LoggerService, private DisplayService: DisplayService, private RandomService: RandomService) {}

  attackFromTo(c1: Character, c2: Character) {
    let randomP = this.RandomService.random()
    // if (c1.attack === randomP) {
    //   c2.attack -= 2;
    //   this.DisplayService.addHistoryEvent(GameService.ATTACK_EVENT_DAMAGE_MSG(c1.name, c2.name))
    // } else if (c2.attack === randomP) {
    //   c1.attack -= 2;
    //   this.DisplayService.addHistoryEvent(GameService.ATTACK_EVENT_NODAMAGE_MSG(c1.name, c2.name))
    // }
    if (c1.attack + randomP > c2.defense) {
      c2.hp -= 2;
      this.DisplayService.addHistoryEvent(GameService.ATTACK_EVENT_DAMAGE_MSG(c1.name, c2.name))
    } else {
      this.DisplayService.addHistoryEvent(GameService.ATTACK_EVENT_NODAMAGE_MSG(c1.name, c2.name))
    }
  }

  attack(c1: Character, c2: Character) {
    this.DisplayService.addHistoryEvent(GameService.ATTACK_EVENT_MSG);
    this.LoggerService.log('Start attack event');
    this.attackFromTo(c1, c2);
    this.attackFromTo(c2, c1);

  }

  // attackEqual(c1: Character, c2: Character){

  // }
}
