import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hello'
})
export class HelloPipe implements PipeTransform {

  transform(dataSize: number): string {
    let data = dataSize / 125000
    return `${data} Mb`
  }

}
