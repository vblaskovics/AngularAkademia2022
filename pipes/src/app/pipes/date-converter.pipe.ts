import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateConverter',
})
export class DateConverterPipe implements PipeTransform {
  transform(input: number): string {
    const date = new Date(input);
    console.log(date);
    return `${date.getFullYear()}-${date.getMonth()+1}-${date.getDay()+1}`;
  }
}
