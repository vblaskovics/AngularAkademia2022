import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class DisplayService {

  public history: string[] = [];

  constructor(private logger: LoggerService) { }

  addHistoryEvent(event: string) {
    this.logger.log('Event added to history');
    this.history.push(event);
  };

  getHistoryText(): string {
    this.logger.log('History text joined');
    return this.history.join(`\n`);
  };
}
