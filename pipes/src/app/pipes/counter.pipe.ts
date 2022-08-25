import { OnDestroy, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'counter',
  pure: false
})
export class CounterPipe implements PipeTransform, OnDestroy{
count = 0;
interval: any;

constructor(){
  this.interval = setInterval(()=>{
    this.count++;
    console.log(this.count)
  }, 1000);

 }
  ngOnDestroy(): void {
    clearInterval(this.interval);
  }
  transform(input:string): string {
    return `${input} : ${this.count}`;
  }

}
