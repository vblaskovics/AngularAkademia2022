import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root',
})
export class DisplayService {
  history: string[] = [];

  constructor(private loggerService: LoggerService) {}

  addHistoryEvent(event: string): void {
    this.loggerService.log('DisplayService add history event');
    this.history.push(event);
  }

  getHistoryText(): string {
    return this.history.join('\n');
  }

  // log(msg: string) {
  //   console.log(msg);
  // }

  // winnerOrLoser(c1: Character, c2: Character) {
  //   console.log(` ${c1} + attack + ${c1.attack} + and he defense ${c2.defense} + . + He lost ${c2.hp} + .`);
  //   console.log(` ${c2} + attack + ${c2.attack} + and he defense + ${c1.defense} + . +  He lost ${c1.hp} + .`);
  // }

}
