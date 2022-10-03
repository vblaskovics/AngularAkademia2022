import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class DisplayService {

  public history: string[] = [];
  public message1: string = "";
  public message2: string = "";

  constructor(private logger: LoggerService) { }

  addHistoryEvent(event: string) {
    this.logger.log('Event added to history');
    this.history.push(event);
  };

  getHistoryText(): string {
    this.logger.log('History text joined');
    return this.history.join(`\n`);
  };

  removeHistoryText() {
    this.logger.log('History cleared')
    this.history.splice(0, this.history.length);
  }

  showMessage(msg1?: string, msg2?: string) {
    if(msg1) {
      this.message1 = msg1;
      setTimeout(() =>  this.message1 = "", 3000)
    }
    if(msg2) {
      this.message2 = msg2;
      setTimeout(() =>  this.message2 = "", 3000)
    }
  }

  getMessage1() {
    return this.message1;
  }
  getMessage2() {
    return this.message2;
  }

  clearMessage() {
    if(this.message1) {
      this.message1 = "";
    }
    if(this.message2) {
      this.message2 = "";
    }
  }
}
