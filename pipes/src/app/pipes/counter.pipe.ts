import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'counter',
  pure: false
})
export class CounterPipe implements PipeTransform {

  count = 0;

  constructor() {
    setInterval(() => {
      this.count++;
      console.log(this.count)
    }, 1000);
  }

  transform(input: string): string {
    return `${input} : ${this.count}`;
  }

}
