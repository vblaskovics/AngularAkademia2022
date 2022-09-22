import { LoggerService } from './logger.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class DisplayService {
  History: string[] = [];

  constructor(private LoggerService: LoggerService) {}


  set history(h: string[]) {
    this.History = h;
  }

  addHistoryEvent(event: string) {
    this.History.push(event);
    this.LoggerService.log('DisplayService add history event');
  }

  getHistoryText(): string {
    this.LoggerService.log('Display attack event')
    return this.History.join('\n');
  }

  //easier version:

  // getHistoryTEXT(): string{
  //   return this.history.join('\m');
  // }
}
