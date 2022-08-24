import { OnDestroy, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'counter',
  pure: false, // ha true lenne, ami default érték, akkor nem megy az időzítő a UI-ban, csak a console-ban
})
export class CounterPipe implements PipeTransform, OnDestroy {
  count = 0;
  interval: any;

  constructor() {
    this.interval = setInterval(() => {
      this.count++;
      console.log(this.count);
    }, 1000);
  }

  transform(input: string): string {
    return `${input} : ${this.count}`;
  }

  // Erre szükség van, különben hiába tüntetjük el html-ben, attól még a háttérben menne tovább az időzítő és megzabálná a memóriát
  ngOnDestroy(): void {
    clearInterval(this.interval);
  }
}
