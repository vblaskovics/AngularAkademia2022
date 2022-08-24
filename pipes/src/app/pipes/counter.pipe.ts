import { OnDestroy, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'counter',
  pure: false,
})
export class CounterPipe implements PipeTransform, OnDestroy {
  count = 0;
  interval: any;
  constructor() {
    this.interval = setInterval(() => {
      this.count++;
    }, 800);
  }
  transform(input: string): string {
    console.log(this.count);
    return input + `: ${this.count}`;
  }
  ngOnDestroy(): void {
    clearInterval(this.interval);
  }
}
