import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'order'
})
export class OrderPipe implements PipeTransform {

  transform(input: string): unknown {
    let extension = input.split(".")
    return extension[extension.length-1]
  }

}
