import { Pipe, PipeTransform, OnDestroy } from '@angular/core';

@Pipe({
  name: 'elapsedSeconds',
  pure: false,
})
export class ElapsedSecondsPipe implements PipeTransform, OnDestroy {
  interval: any;
  elapsedSec: number = 0;
  date: number = 0;

  constructor() {
    this.interval = setInterval(()=>{
      this.elapsedSec = Math.floor((new Date().getTime() - this.date) / 1000);
    },1000);
  }

  transform(date: number): number {
    this.date = date;
    return this.elapsedSec;
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }
}
