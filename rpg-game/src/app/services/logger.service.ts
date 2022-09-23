import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  log(log:string) {
    console.log(log);
  }

  constructor() { }

}
