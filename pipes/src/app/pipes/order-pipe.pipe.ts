import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderPipe'
})
export class OrderPipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
