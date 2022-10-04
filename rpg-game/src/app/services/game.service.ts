import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character';
import { DisplayService } from './display.service';
import { LoggerService } from './logger.service';
import { RandomService } from './random.service';

import {BehaviorSubject, interval, map, of, takeUntil, takeWhile, tap} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GameService {

  static readonly ATTACK_EVENT_MSG = `=== TÁMADÁS ===`
  static readonly ATTACK_EVENT_DAMAGE_MSG = (n1: string, n2: string) => `${n1} megsebezte ${n2}-t (-2 hp)`
  static readonly ATTACK_EVENT_NODAMAGE_MSG = (n1: string, n2: string) => `${n1} nem sebezte meg ${n2}-t`

  character1$:BehaviorSubject<Character | null> = new BehaviorSubject<Character | null>(null);
  character2$:BehaviorSubject<Character | null> = new BehaviorSubject<Character | null>(null);

  c1Streak: number = 0;
  c2Streak: number = 0;

  constructor(private logger: LoggerService,
    private displayService: DisplayService,
    private randomService: RandomService) { }

  attackFromTo(c1: Character, c2: Character): boolean {
    let rand = this.randomService.random();
    if (c1.attack + rand > c2.defense) {
      c2.hp -= 2;
      this.displayService.addHistoryEvent(GameService.ATTACK_EVENT_DAMAGE_MSG(c1.name, c2.name));
      return true;
    } else {
      this.displayService.addHistoryEvent(GameService.ATTACK_EVENT_NODAMAGE_MSG(c1.name, c2.name));
      return false;
    }
  }

  attack(c1: Character, c2: Character) {
    this.logger.log('Start attack event');
    this.displayService.addHistoryEvent(GameService.ATTACK_EVENT_MSG);


    interval(1000).pipe(
      map(() => {
       const c1Result = this.attackFromTo(c1, c2);
       const c2Result = this.attackFromTo(c2, c1);
       // c1 streak
       if(c1Result) {
         this.c1Streak++;
       } else {
         this.c1Streak = 0;
       }
       if(this.c1Streak >= 3) {
         this.streakMessage(c1);
       }

        // c2 streak
       if(c2Result) {
         this.c2Streak++;
       } else {
         this.c2Streak = 0;
       }
       if(this.c2Streak >= 3) {
         this.streakMessage(c2);
       }

      }),
      tap(() => {
        if(c1.hp <= 0) {
          this.displayService.addHistoryEvent(`${c2.name} WINNER WINNER CHICKEN DINNER`)
        }

        if(c2.hp <= 0) {
          this.displayService.addHistoryEvent(`${c1.name} WINNER WINNER CHICKEN DINNER`)
        }
      }),
      takeWhile(() => {
        return c1.hp > 0 && c2.hp > 0
      }),
    ).subscribe()
  }

  streakMessage(c: Character): void {
    this.displayService.addHistoryEvent(`${c.name} IS ON FIREEE`);
  }


}
