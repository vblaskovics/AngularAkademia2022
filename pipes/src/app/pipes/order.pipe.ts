import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'order',
})
export class OrderPipe implements PipeTransform {
  transform(input: string, separator: string = ' '): unknown {
    return input.split(' ').reverse().join(separator);
  }
}
