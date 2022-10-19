import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class DisplayService {

  private _history: string[] = [];

  constructor(private loggerService: LoggerService) { }

  set history(h: string[]) {
    this._history = h;
  }

  addHistoryEvent(event: string): void {
    this.loggerService.log('Displayservice added history event');
    this._history.push(event);
  }

  getHistoryText() : string {
    return this._history.join('\n');
  }

}
