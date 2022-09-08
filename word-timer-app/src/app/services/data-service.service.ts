import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataServiceService {
  activatedEmitter = new Subject<boolean>();

  constructor() {}
}
