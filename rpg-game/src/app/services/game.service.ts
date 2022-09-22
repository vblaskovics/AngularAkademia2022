import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character';
import { HistoryService } from './history.service';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private loggerService: LoggerService, private historyService: HistoryService) { }

  attack(c1: Character, c2: Character) {
    this.loggerService.logger('Start attack event')
    let result = `===TÁMADÁS===\n${this.dealDamage(c1, c2)}\n${this.dealDamage(c2, c1)}`;
    this.historyService.addHistory(result)
  }

  dealDamage(c1: Character, c2: Character): string{
    if(c1.attack > c2.defense) {
      c2.hp -= 2
      return `${c1.name} megsebezte ${c2.name}-ot(-2hp)`
    }
    return `${c1.name} nem sebezte meg ${c2.name}-t`
  }
}
