import { DamageService } from './damage.service';
import { LoggerService } from './logger.service';
import { Character } from './../models/character';
import { Injectable } from '@angular/core';
import { DisplayService } from './display.service';
import { RandomService } from './random.service';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  fight: any;

  constructor(
    private logger: LoggerService,
    private displayService: DisplayService,
    private randomService: RandomService,
    private damageService: DamageService
    ) { }

  attackFromTo(c1: Character, c2: Character) {
    let randomNumber = this.randomService.randomNumber();
    console.log('random', randomNumber);

    if((c1.attack + 6) <= c2.defense && (c2.attack + 6) <= c1.defense) {
      this.displayService.addHistoryEvent('Ezek a karakterek sosem tudják megsebezni egymást!');
      this.gameOver();
    } else if((c1.attack + randomNumber) > c2.defense) {
      c2.hp -= 2;
      this.displayService.addHistoryEvent(`${c1.name} megsebezte ${c2.name}-t (-2hp)`);
      this.damageService.countDamage(c1.name);
    } else {
      this.displayService.addHistoryEvent(`${c1.name} nem sebezte meg ${c2.name}-t.`);
      this.damageService.resetDamage(c1.name);
    }
  }

  attack(c1: Character, c2: Character) {
    this.logger.log('Start attack event');
    this.displayService.removeHistoryText();
    this.fight = setInterval(() => {
      if(c1.hp > 0 && c2.hp > 0) {
        this.displayService.addHistoryEvent('========TÁMADÁS========');
        this.attackFromTo(c1, c2);
        this.attackFromTo(c2, c1);
      } else {
        this.gameOver();
        this.damageService.clearDamageCounter();
        this.displayService.clearMessage();
        this.displayService.addHistoryEvent('TÁMADÁS VÉGE');
        this.displayService.addHistoryEvent(`A győztes: ${this.checkWinner(c1, c2)}`);
      }
    }, 1000);
  }

  checkWinner(c1: Character, c2: Character): string {
    return c1.hp > c2.hp ? c1.name : c2.name;
  }

  gameOver() {
    clearInterval(this.fight);
  }
}
