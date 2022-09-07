<<<<<<< HEAD
import { Pipe, PipeTransform, OnDestroy } from '@angular/core';
=======
import { OnDestroy, Pipe, PipeTransform } from '@angular/core';
>>>>>>> 7d99ba94b13527368e1a2a93686137e8203437a4

@Pipe({
  name: 'counter',
  pure: false
})
<<<<<<< HEAD
export class CounterPipe implements PipeTransform, OnDestroy {
  count = 0;
  interval:any;

  constructor() {
    this.interval = setInterval(()=>{
      this.count++;
      console.log(this.count);
    }, 1000);
  }

  transform(input: string): string {
    return `${input} : ${this.count}`;
=======
export class CounterPipe implements PipeTransform, OnDestroy{

  count = 0;
  interval: any

  constructor(){
    this.interval = setInterval(() => {
      this.count++;
      console.log(this.count);

    },1000);
  }

  transform(input: string): string {
    return `${input}: ${this.count}`;
>>>>>>> 7d99ba94b13527368e1a2a93686137e8203437a4
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

}
