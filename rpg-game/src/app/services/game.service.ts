import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character';
import { LoggerService } from './logger.service';
import { DisplayService } from './display.service';
import { RandomService } from './random.service';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  static readonly ATTACK_EVENT_MSG = '=== TÁMADÁS ===';
  static readonly ATTACK_EVENT_DMG_MSG = (n1: string, n2: string) => `${n1} megsebezte ${n2}-t (-2HP)`;
  static readonly ATTACK_EVENT_NODMG_MSG = (n1: string, n2: string) => `${n1} nem sebezte meg ${n2}-t`;

  constructor(private logger: LoggerService,
    private displayService: DisplayService,
    private randomService: RandomService) { }


  attackFromTo(char1: Character, char2: Character) {
    let rand = this.randomService.random();
    if(char1.attack + rand > char2.defense) {
      char2.hp -= 2;
      this.displayService.addHistoryEvent(GameService.ATTACK_EVENT_DMG_MSG(char1.name, char2.name))
    } else {
      this.displayService.addHistoryEvent(GameService.ATTACK_EVENT_NODMG_MSG(char1.name, char2.name))
    }
  }

  attack(char1: Character, char2: Character){
    this.logger.log('start attack event');
    this.displayService.addHistoryEvent(GameService.ATTACK_EVENT_MSG);

    this.attackFromTo(char1, char2);
    this.attackFromTo(char2, char1);
  }


}
