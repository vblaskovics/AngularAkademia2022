import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root',
})
export class DisplayService {
  history: string[] = [];
  killingSpreeMessage = '';

  constructor(private loggerService: LoggerService) {}

  addHistoryEvent(event: string): void {
    this.history.push(event);
  }

  getHistoryText(): string[] {
    return this.history;
  }

  storeKillingSpreeMsg(message: string) {
    this.killingSpreeMessage = message;
    setTimeout(() => {
      this.killingSpreeMessage = '';
    }, 3000);
  }

    getKillingSpreeMsg() {
      return this.killingSpreeMessage;
    }


}
