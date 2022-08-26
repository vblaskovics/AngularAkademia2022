import {  Pipe, PipeTransform, OnDestroy} from '@angular/core';

@Pipe({
  name: 'elapsedtime',
  pure:false
})
export class ElapsedtimePipe implements PipeTransform, OnDestroy {

  interval: any;
  date: number  = 0;
  elapsedSec: number = 0;

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
