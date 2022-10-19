import { Injectable } from '@angular/core';
import { Character } from '../models/Character';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  constructor() {}

  log(logmessage: string) {
    console.log(logmessage);
  }
}
