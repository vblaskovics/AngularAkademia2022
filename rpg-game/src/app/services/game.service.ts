import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Character } from '../interfaces/character';
import { DisplayService } from './display.service';
import { LoggerService } from './logger.service';
import { RandomService } from './random.service';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  winner$: Subject<string | undefined> = new Subject<string | undefined>();
  firstCharacterHitCounter$ = new BehaviorSubject<number>(0);
  secondCharacterHitCounter$ = new BehaviorSubject<number>(0);
  constructor(
    private loggerService: LoggerService,
    private displayService: DisplayService,
    private randomService: RandomService
  ) {}
  attack(c1: Character, c2: Character) {
    this.loggerService.log('An attack event');
    this.displayService.addHistoryEvent('============TÁMADÁS============');
    let c1Hp = structuredClone(c1).hp;
    let c2Hp = structuredClone(c2).hp;

    this.attackFromTo(c1, c2);
    this.attackFromTo(c2, c1);

    this.isLosingHealth(c1Hp, c1.hp)
      ? this.secondCharacterHitCounter$.next(
          this.secondCharacterHitCounter$.getValue() + 1
        )
      : this.secondCharacterHitCounter$.next(0);

    this.isLosingHealth(c2Hp, c2.hp)
      ? this.firstCharacterHitCounter$.next(
          this.firstCharacterHitCounter$.getValue() + 1
        )
      : this.firstCharacterHitCounter$.next(0);
  }
  isLosingHealth(baseHp: number, currentHp: number) {
    if (baseHp == currentHp) {
      return false;
    } else {
      return true;
    }
  }
  attackFromTo(attacker: Character, defender: Character) {
    let randomBonus = this.randomService.random();

    if (attacker.attack + randomBonus > defender.defense) {
      defender.hp -= 2;
    }
    this.displayService.addHistoryEvent(
      attacker.attack > defender.defense
        ? `${attacker.name} megsebezte ${defender.name}-ot (-2hp)`
        : `${attacker.name} nem sebezte meg a ${defender.name}-t`
    );
  }
}
