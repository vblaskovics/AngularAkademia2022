import { Injectable } from '@angular/core';

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
    this.history.push('============FIGHT STARTED============');
  }
}
