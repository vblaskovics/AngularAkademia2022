import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }

  log(logMsg: string) {
    console.log(logMsg);
  }
}
