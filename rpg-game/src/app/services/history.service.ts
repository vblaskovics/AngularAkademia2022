import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  // Ez lehet egy observable
  history: string[] = []

  constructor(private loggerService: LoggerService) { }

  addHistory(event: string) {
    this.history.push(event)
    this.loggerService.logger(event)
    this.loggerService.logger(event)
    this.loggerService.logger(event)
    this.loggerService.logger(event)
  }

  getHistoryText(history: string[]): string {
    let result = ""
    history.forEach((event, i) => {
      if(i < history.length - 1) {
        result += `${event}\n`
      } else {
        result += `${event}`
      }
    })
    return result
  }
}
