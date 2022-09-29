import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root',
})
export class DisplayService {
  //history: string[] = [];
  history$: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);
  constructor(private loggerService: LoggerService) {}

  addHistoryEvent(item: string) {
    let addedValue = this.history$.getValue();
    addedValue.push(item);
    this.loggerService.log(`'${item}' is added to the history`);
    this.history$.next(addedValue);
  }
  getHistoryText(): string {
    let text1 = this.history$.getValue().join('\n');
    /* let text = '';
    for (let i = 0; i < this.history$.getValue().length; i++) {
      text += this.history$.getValue()[i];
      if (i < this.history$.getValue().length - 1) {
        text += '\n';
      }
    }
 */
    return text1;
    //  return '';
  }
}
