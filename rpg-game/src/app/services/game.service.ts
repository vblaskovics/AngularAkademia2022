import { Injectable } from '@angular/core';
import { Character } from '../model/character.interface';
import { DisplayService } from './display.service';
import { LoggerService } from './logger.service';
import { RandomService } from './random.service';

@Injectable({
  providedIn: 'root',
})
export class GameService {
   attackMsg: string = '========TÁMADÁS========';
   attackDmgMsg = (c1: string, c2: string) => `${c1} megsebezte ${c2}-t (-2 hp)`;
   noAttackDmgMsg = (c1: string, c2: string) => `${c1} nem sebezte meg ${c2}-t`;

  constructor(private logger: LoggerService, private displayService: DisplayService, private randomService: RandomService) {}

  attack(characterOne: Character, characterTwo: Character) {
    this.logger.log('Start attack event');
    this.displayService.addHistoryEvent(this.attackMsg);
    this.attackFromTo(characterOne, characterTwo);
    this.attackFromTo(characterTwo, characterOne);
  }

  attackFromTo(c1: Character, c2: Character){
    let random = this.randomService.random();
    if(c1.attack + random > c2.defense) {
      c2.hp -= 2;
      this.displayService.addHistoryEvent(this.attackDmgMsg(c1.name, c2.name));
      if(c2.attack + random > c1.defense) {
        c1.hp -=2;
      }
    } else {
      this.displayService.addHistoryEvent(this.noAttackDmgMsg(c1.name, c2.name));
    }
  }

  logTimes(logMsg: string) {
    console.log(logMsg);
    // this.displayService.winnerOrLoser;
  }


}
