import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';
import {BehaviorSubject, map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DisplayService {

  // private _history:string[] = [];

  public historyText: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);

  constructor(private loggerService: LoggerService) { }

  // set history(h: string[]) {
  //   this._history = h;
  // }

  addHistoryEvent(event:string): void {
    this.loggerService.log('DisplayService add history event');
    // this._history.push(event);
    let currentValue = this.historyText.getValue();
    currentValue.push(event);
    this.historyText.next(currentValue);
  }

  getHistoryText(): Observable<string> {
    return this.historyText.pipe(
      map((history) => {
        return history.join('\n');
      })
    )
    // return this._history.join('\n');
  }


}
