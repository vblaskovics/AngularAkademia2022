import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomService {

  constructor() { }

  random(): number{
   let randomP = Math.round(Math.random() * 5) + 1;
   return randomP
  }



}
