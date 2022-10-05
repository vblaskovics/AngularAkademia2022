import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character';
import { CharacterService } from './character.service';
import { HistoryService } from './history.service';
import { LoggerService } from './logger.service';
import { RandomService } from './random.service';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(
      private loggerService: LoggerService, 
      private historyService: HistoryService, 
      private randomService: RandomService, 
      private charService: CharacterService) { }

  attack(c1: Character, c2: Character) {
    let char1 = this.charService.char1?.getValue();
    let char2 = this.charService.char2?.getValue();
    this.loggerService.logger('Start attack event')
    let result = `===TÁMADÁS===\n${this.dealDamage(char1!, char2!)}\n${this.dealDamage(char1!, char2!)}`;
    this.historyService.addHistory(result)
  }

  dealDamage(c1: Character, c2: Character): string{
    let randAttack = this.randomService.getRandomNumber()
    if(c1.attack + randAttack > c2.defense) {
      c2.hp -= 2
      return `${c1.name} megsebezte ${c2.name}-ot(-2hp)`
    }
    return `${c1.name} nem sebezte meg ${c2.name}-t`
  }

  resetGame() {
    this.charService.char1?.next(null);
    this.charService.char2?.next(null);
    this.historyService.history = [];
    
  }
}
