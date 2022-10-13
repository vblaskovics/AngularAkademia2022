
import { Injectable } from '@angular/core';
import { interval, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CounterServiceService {
  
  //counter part:

  clock: Observable<number> = interval(2000);

  counter: {value: number} = {
    value:5
  }

  //word part:
  word: {value: string} = {
    value: 'empty'
  }

  //score part:
  score: {value: number} = {
    value: 0
  }


  constructor() {
    this.clock.subscribe((value)=>{
      this.counter.value--;
      if(this.counter.value === -1){
        console.log(value);
        this.resetCounter();
        this.resetWord();
      }
    })
    
    this.resetCounter();
    this.resetWord();
  }

  getClock(){
    return this.clock;
  }

  getCounter(){
    return this.counter
  }

  resetCounter(){
    this.counter.value = Math.floor(Math.random() * 3) + 3;
  }

  getWord(){
    return this.word;
  }

  resetWord(){
    let newWord = '';
    let randomText = 'abcdefghijklmnopqrstuvwxyz';
    for (let i = 0; i < Math.floor(Math.random()* 3) + 4; i++){
      newWord += randomText.charAt(Math.floor(Math.random() * randomText.length));
    }
    this.word.value = newWord;

  }


  getScore(){
    return this.score;
  }

  addScore(){
    this.score.value++;
  }

  comparingWords(inputValue:string){
    if (inputValue === this.word.value){
      this.addScore();
    }
    this.resetWord();
    this.resetCounter();
  }

  
}
