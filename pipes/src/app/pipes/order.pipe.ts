import { OnDestroy, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'order',
})
export class OrderPipe implements PipeTransform {
  transform(input: string, separator: string = ' '): string {
    return input.split(separator).reverse().join(separator);
  }
}
