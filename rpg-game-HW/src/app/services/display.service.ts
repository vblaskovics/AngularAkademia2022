import { LoggerService } from './logger.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class DisplayService {
  History: string[] = [];
  EventMessage = '';

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


  onEventMessage(text: string) {
    this.EventMessage = text;
    setTimeout(() => {
      this.EventMessage = '';
    }, 3000);
  }



}
