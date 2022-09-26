import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Character } from '../model/character';
import { DisplayService } from './display.service';
import { LoggerService } from './logger.service';
import { RandomService } from './random.service';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  isFightStarted: boolean = false;
  private attackInterval: any;
  winner: Character;
  damageSubject: Subject<string> = new Subject<string>();

  constructor(
    private loggerService: LoggerService,
    private displayService: DisplayService,
    private randomService: RandomService
  ) {}

  fight(c1: Character, c2: Character) {
    this.displayService.logAttackStart();
    this.attackInterval = setInterval(() => {
      this.attack(c1, c2);
      if (!this.isGameover(c1.hp, c2.hp)) {
        this.attack(c2, c1);
      }
    }, 1000);
  }

  attack(attacker: Character, defender: Character): void {
    if (attacker.attack > defender.defense) {
      defender.hp -= 2;
      this.displayService.addHistoryEvent(
        `${attacker.name} megsebezte ${defender.name}-t`
      );
      this.displayService.addHistoryEvent(
        `${defender.name} -2 hp! ${defender.name}\'s hp is: ${defender.hp}`
      );
      this.damageSubject.next(attacker.name);
      if (this.isGameover(attacker.hp, defender.hp)) {
        clearInterval(this.attackInterval);
        this.winner = this.checkWinner(attacker, defender);
        this.displayService.addHistoryEvent(
          `📢📢📢THE WINNER IS: ${this.winner.name}!📢📢📢`
        );
      }
    } else {
      this.displayService.addHistoryEvent(
        `${attacker.name} nem sebezte meg ${defender.name}-t`
      );
    }
  }

  isGameover(hp1: number, hp2: number): boolean {
    return hp1 <= 0 || hp2 <= 0;
  }

  checkWinner(char1: Character, char2: Character): Character {
    return char1.hp > char2.hp ? char1 : char2;
  }
}
