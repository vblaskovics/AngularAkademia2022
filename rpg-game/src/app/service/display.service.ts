import { Injectable } from '@angular/core';
import { Character } from '../model/character';

@Injectable({
  providedIn: 'root',
})
export class DisplayService {
  history: string[];

  constructor() {
    this.history = [];
  }

  addHistoryEvent(str: string): void {
    this.history.push(str);
  }

  getHistoryText(): string {
    return this.history.join('\n');
  }

  logAttackStart(): void {
    console.log(
      '=============================TÁMADÁS=============================='
    );
  }

  logWinnerAndLoser(player1: Character, player2: Character): void {
    console.log(
      `${player1.name} megsebezte ${player2.name} - t\n${player2.name} nem sebezte meg ${player1.name} - t`
    );
  }
}
