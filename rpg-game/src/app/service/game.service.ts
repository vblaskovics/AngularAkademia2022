import { Injectable } from '@angular/core';
import { Character } from '../model/character';
import { DisplayService } from './display.service';
import { LoggerService } from './logger.service';
import { RandomService } from './random.service';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private _isFightStarted: boolean = false;

  constructor(
    private loggerService: LoggerService,
    private displayService: DisplayService,
    private randomService: RandomService
  ) {}

  attack(c1: Character, c2: Character): void {
    this.displayService.logAttackStart();
    this.attackFromTo(c1, c2);
    this.attackFromTo(c2, c1);
  }

  public get isFightStarted(): boolean {
    return this._isFightStarted;
  }

  public set isFightStarted(value: boolean) {
    this._isFightStarted = value;
  }

  attackFromTo(c1: Character, c2: Character) {
    if (c1.attack + this.randomService.random(1, 6) > c2.defense) {
      c2.hp -= 2;
      this.loggerService.log(`${c1.name} megsebezte ${c2.name} - t`);
      this.loggerService.log(`${c2.name} nem sebezte meg ${c1.name} - t`);
      this.displayService.addHistoryEvent(`${c1.name} megsebezte ${c2.name}-t`);
    } else {
      this.displayService.addHistoryEvent(
        `${c1.name} nem sebezte meg ${c2.name}-t`
      );
    }
  }
}
