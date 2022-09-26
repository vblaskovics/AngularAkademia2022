import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { GameService } from './game.service';

@Injectable({
  providedIn: 'root',
})
export class KillingSpreeCounterService {
  killingSpreeCounter: [
    { charName: string; killingSerieCounter: number },
    { charName: string; killingSerieCounter: number }
  ] = [
    { charName: '', killingSerieCounter: 0 },
    { charName: '', killingSerieCounter: 0 },
  ];
  lastPointBy: string;
  isKillingSpreeSubject: Subject<string> = new Subject<string>();

  constructor(private gameService: GameService) {
    this.gameService.damageSubject.subscribe((name) => {
      if (this.killingSpreeCounter[0].charName === name) {
        this.killingSpreeCounter[0].killingSerieCounter++;
        this.killingSpreeCounter[1].killingSerieCounter = 0;
        this.checkKillingSerieNumber(
          this.killingSpreeCounter[0].killingSerieCounter,
          0
        );
      } else {
        this.killingSpreeCounter[1].killingSerieCounter++;
        this.killingSpreeCounter[0].killingSerieCounter = 0;
        this.checkKillingSerieNumber(
          this.killingSpreeCounter[1].killingSerieCounter,
          1
        );
      }
    });
  }

  setFighters(char1: string, char2: string): void {
    this.killingSpreeCounter[0] = { charName: char1, killingSerieCounter: 0 };
    this.killingSpreeCounter[1] = { charName: char2, killingSerieCounter: 0 };
    console.log(this.killingSpreeCounter);
  }

  checkKillingSerieNumber(damageCounter: number, index: number): void {
    if (damageCounter === 3) {
      this.isKillingSpreeSubject.next(this.killingSpreeCounter[index].charName);
      console.log(
        `Show the popup, because ${this.killingSpreeCounter[index].charName} has 3 Killing!`
      );
      this.killingSpreeCounter[index].killingSerieCounter = 0;
    }
  }
}
