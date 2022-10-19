import { Injectable } from '@angular/core';
import { Character } from '../models/Character';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root',
})
export class DisplayService {
  private _history: string[] = [];

  constructor(private loggerService: LoggerService) {
    this._history = [];
  }

  set history(h: string[]) {
    this._history = h;
  }

  addHistoryEvent(str: string) {
    this.loggerService.log('DisplayService add history event');
    this._history.push(str);
  }

  getHistoryText(): string {0
    return this._history.join('\n');
    // let str = ""

    // for()
    // return str
  }


}
